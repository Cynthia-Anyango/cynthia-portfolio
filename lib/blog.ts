
export type BlogCategory =
  | "Technology"
  | "Digital Marketing"
  | "Learning & Growth"
  | "Community";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  coverImage: string;
  featured?: boolean;
  published: boolean;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-cnn-based-tilapia-egg-classifier",
    title: "Building a CNN-Based System for Detecting Unhealthy Tilapia Eggs",
    excerpt:
      "Exploring how computer vision and deep learning can support tilapia hatchery quality assessment through image classification.",
    category: "Technology",
    date: "2026-11-21",
    readTime: "6 min read",
    coverImage:
      "/images/software-development/tilapia-cnn/research.jpg",
    featured: true,
    published: true,
    content: `
## Where the idea began

The idea behind this project came from an opportunity to explore how artificial intelligence could support quality assessment in tilapia hatcheries.

During egg transportation, unhealthy eggs can travel alongside healthy ones. Identifying them is important because they may affect the quality of the batch.

I began exploring whether a computer vision system could help distinguish healthy tilapia eggs from unhealthy ones.

## Exploring the problem

The project focuses on two initial classification categories:

- **Healthy eggs**
- **Unhealthy eggs**

Narrowing the classification to these two categories provided a practical starting point for model development.

Understanding the characteristics of the eggs, image quality and the available dataset became important parts of the research process.

## Developing the model

I used Python and TensorFlow/Keras to develop a Convolutional Neural Network (CNN).

The workflow included:

1. Preparing and organising the image dataset.
2. Resizing images to a consistent input size.
3. Applying image augmentation.
4. Splitting the dataset into training, validation and testing sets.
5. Training and evaluating the CNN model.

The project also includes a Streamlit interface for interacting with the trained model.

## What I am learning

One important lesson has been that model performance on a small, controlled dataset does not necessarily translate to reliable performance on new images.

Testing with independent images highlighted the importance of dataset diversity, image quality and generalisation.

These are areas I intend to continue investigating as the project develops.

## Looking ahead

A future direction is to explore whether the system could work alongside hatchery imaging equipment or live camera feeds.

That would require further research into image acquisition, camera compatibility, real-time processing and validation under actual hatchery conditions.

For now, the focus remains on developing and evaluating a reliable image-classification foundation.

---

*This is an ongoing learning and development project, with further testing and improvements still needed.*
`,
  },
  {
    slug: "learning-through-technology-communities",
    title: "Growing Through Technology Communities",
    excerpt:
      "What volunteering, student leadership and participating in developer communities have taught me about learning and collaboration.",
    category: "Community",
    date: "2026-11-18",
    readTime: "4 min read",
    coverImage: "/images/about/gdsc-lead.jpg",
    published: true,
    content: `
## More than learning to code

My journey in technology has involved more than learning programming languages and building projects.

Being part of technology communities has introduced me to collaboration, leadership, mentorship and the value of sharing knowledge.

## Finding a community

Through Google Developer Student Clubs at St Paul's University, I had an opportunity to contribute to a student-led technology community.

I also became involved with Google Crowdsource, supporting participation and engagement around accessible digital tools.

These experiences helped me appreciate how communities can make technology more approachable.

## Learning by contributing

One of the most valuable lessons has been that leadership is also about creating opportunities for others to learn and participate.

From organising activities to engaging with fellow learners, each experience has contributed to my growth.

## Continuing the journey

I continue to value communities that encourage experimentation, knowledge sharing and practical learning.

Technology becomes more meaningful when people build and learn together.
`,
  },
  {
    slug: "the-intersection-of-design-and-digital-communication",
    title: "Where Design Meets Digital Communication",
    excerpt:
      "Why effective digital communication needs more than attractive visuals, and how design supports the bigger brand story.",
    category: "Digital Marketing",
    date: "2026-11-15",
    readTime: "4 min read",
    coverImage: "/images/graphic-design/branding.jpg",
    published: true,
    content: `
## Design is part of the message

Visual design is often the first thing people notice about a brand's digital presence.

But good design is not simply about making something attractive. It should help communicate an idea clearly and make it easier for an audience to understand the message.

## Connecting visuals to strategy

In digital marketing, design works alongside content, audience understanding and campaign objectives.

Before creating a graphic, it helps to consider:

- Who is the intended audience?
- What is the main message?
- What action should the audience take?
- Where will the creative be published?
- Does the visual align with the brand?

These questions help make design decisions more intentional.

## Consistency builds recognition

A consistent visual identity helps audiences recognise a brand across different platforms.

Colour, typography, imagery and layout all contribute to that experience.

Consistency does not mean every design must look identical. It means the work should feel connected.

## Bringing it all together

My experience across digital marketing and graphic design has reinforced the importance of treating creativity and strategy as complementary skills.

The strongest communication happens when the visual, the message and the objective work together.
`,
  },
];

export function getPublishedPosts() {
  return blogPosts
    .filter((post) => post.published)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string) {
  return blogPosts.find(
    (post) => post.slug === slug && post.published
  );
}



// ADD THE NET BLOG POST HEREE



// {
//   slug: "my-new-article",
//   title: "My New Article",
//   excerpt: "A short introduction to the article.",
//   category: "Technology",
//   date: "2026-11-21",
//   readTime: "5 min read",
//   coverImage: "/images/blog/my-new-article.jpg",
//   published: true,
//   content: `
// ## First heading

// Write your article here.

// ## Another heading

// Continue writing here.
// `,
// },