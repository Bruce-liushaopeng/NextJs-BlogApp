import PostHeader from "./post-header";
import classes from './post-content.module.css';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import React from "react";

const DUMMY_POST = {
  slug: "nodejs-intro",
  title: "Getting Started with Node.js",
  image: "nodejs-intro.jpeg",
  date: "2023-01-15",
  content: '# This is a first post'
};

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath}/>
      <ReactMarkdown >{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
