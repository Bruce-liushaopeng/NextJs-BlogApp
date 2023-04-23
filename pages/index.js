import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POST = [
  {
    slug: "getting-started-with-nextjs",
    title: "gettting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a powerful open-source framework built on top of React, designed to create server-side rendered React applications with ease. It enables developers to build scalable and performant web applications using the latest web technologies such as server-side rendering, automatic code splitting, static site generation, and much more. ",
    data: "2022-02-01",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "gettting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a powerful open-source framework built on top of React, designed to create server-side rendered React applications with ease. It enables developers to build scalable and performant web applications using the latest web technologies such as server-side rendering, automatic code splitting, static site generation, and much more. ",
    data: "2022-02-01",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "gettting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a powerful open-source framework built on top of React, designed to create server-side rendered React applications with ease. It enables developers to build scalable and performant web applications using the latest web technologies such as server-side rendering, automatic code splitting, static site generation, and much more. ",
    data: "2022-02-01",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "gettting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a powerful open-source framework built on top of React, designed to create server-side rendered React applications with ease. It enables developers to build scalable and performant web applications using the latest web technologies such as server-side rendering, automatic code splitting, static site generation, and much more. ",
    data: "2022-02-01",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POST} />
    </Fragment>
  );
}

export default HomePage;
