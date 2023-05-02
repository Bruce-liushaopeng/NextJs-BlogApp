import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'

SyntaxHighlighter.registerLanguage('jsx',jsx)

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // get in the if block if we find we are generating a <img>
    // img(myimage){
    //   console.log("in the image block")
    //   console.log(myimage)
    //   // retrieve the important properties.
    //   const imageSrc = myimage.src;
    //   const imageAlt = myimage.alt;
    //   return (
    //     <div className={classes.image}>
    //       <Image
    //         src={`/images/posts/${post.slug}/${imageSrc}`}
    //         alt={imageAlt}
    //         width={750}
    //         height={420}
    //       />
    //     </div>
    //   );
    //   }

    // everything in react-markdown is rendered as a paragraph, we do the following instead to avoid error msg
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // class name is something.jsx, this give us the 'jsx' part
      return (
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          children={children}
        />
      );
    },
  };

  // post.content contains all the markdown content of the page, we pass down that to ReactMarkdown
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
