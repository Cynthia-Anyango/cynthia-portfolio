
import { NextResponse } from "next/server";
import { Resend } from "resend";


// Basic rate limiting
const rateLimit = new Map<
  string,
  { count: number; resetAt: number }
>();

const MAX_SUBMISSIONS = 5;
const WINDOW_MS = 10 * 60 * 1000;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, website } = await request.json();

// Reject submissions that fill in the hidden honeypot field
if (website) {
  return NextResponse.json({ success: true });
}

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please complete all fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 150 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields are invalid or too long." },
        { status: 400 }
      );
    }


    // Identify the visitor
const ip =
  request.headers.get("x-real-ip") ||
  request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
  "unknown";

const now = Date.now();

// Remove expired entries
for (const [key, value] of rateLimit.entries()) {
  if (now > value.resetAt) {
    rateLimit.delete(key);
  }
}

const current = rateLimit.get(ip);

// Reject visitors who have exceeded the limit
if (current && current.count >= MAX_SUBMISSIONS && now < current.resetAt) {
  return NextResponse.json(
    { error: "Too many messages. Please try again in a few minutes." },
    { status: 429 }
  );
}

// Record this submission
if (!current || now >= current.resetAt) {
  rateLimit.set(ip, {
    count: 1,
    resetAt: now + WINDOW_MS,
  });
} else {
  current.count += 1;
}

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `Portfolio enquiry: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
