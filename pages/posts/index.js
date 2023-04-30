import AllPosts from "../../components/posts/all-posts";

const DUMMY_POST = [
    {
      slug: "getting-started-with-nextjs",
      title: "gettting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next.js is a powerful open-source framework built on top of React, designed to create server-side rendered React applications with ease.  ",
      date: "2022-02-01",
    },
    {
      slug: "springboot-rest-api",
      title: "Building a REST API with Springboot",
      image: "springboot-rest-api.jpeg",
      excerpt:
        "Springboot is a popular Java framework for building web applications, and it comes with built-in support for building RESTful APIs.",
      date: "2023-03-15",
    },
    {
      slug: "getting-started-with-maven",
      title: "Getting Started with Maven",
      image: "getting-started-with-maven.jpeg",
      excerpt:
        "Maven is a powerful build automation tool for Java projects, and it can help streamline the development process by managing dependencies. ",
      date: "2023-04-01",
    },
    {
      slug: "building-a-flask-web-app",
      title: "Building a Web App with Flask",
      image: "building-a-flask-web-app.jpeg",
      excerpt:
        "Flask is a lightweight Python web framework that is perfect for building small to medium-sized web applications. .",
      date: "2023-02-15",
    },
    {
      slug: "nodejs-intro",
      title: "Getting Started with Node.js",
      image: "nodejs-intro.jpeg",
      excerpt:
        "Node.js is a powerful JavaScript runtime that allows developers to build high-performance web applications using server-side JavaScript. .",
      date: "2023-01-15",
    },
  ];
  

function AllPostsPage() {
    return (
        <AllPosts posts={DUMMY_POST}/>
    );
}

export default AllPostsPage