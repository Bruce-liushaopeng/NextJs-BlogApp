import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
  return <PostContent post={props.post}/>;
}

export function getStaticProps(context) {
  const { params } = context;
  const {slug} = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600 // when the markdown is updated, this can be at least update every 10 mins
  }
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));
  // generating all our path in advance
  return {
    paths: slugs.map(slug => ({ params: { slug: slug }})),
    fallback: false
  }
}

export default PostDetailPage;
