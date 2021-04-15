import { Params } from "next/dist/next-server/server/router";

import { GetStaticPaths, GetStaticProps } from "next";

import Prismic from "@prismicio/client";
import { getClientPrimisc } from "services/prismic";
import { PostProps, TemplatePost } from "templates/Post";

const Post = ({ ...props }: PostProps) => {
  return <TemplatePost {...props} />;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getClientPrimisc();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      pageSize: 10,
    }
  );

  const paths = response.results.map((item) => ({
    params: { slug: item.uid },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
}: Params) => {
  const { slug } = params;

  const prismic = getClientPrimisc();

  const { uid, data, first_publication_date } = await prismic.getByUID(
    "post",
    String(slug),
    {}
  );

  const { results } = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {}
  );

  const indexPostPreviow = results.findIndex((post) => post.uid === uid) + 1;
  const indexNextPost = results.findIndex((post) => post.uid === uid) - 1;

  const posts = results.map((post) => ({
    uid: post.uid,
    title: post.data.title,
  }));

  const previousPost = posts[indexPostPreviow] || "";
  const nextPost = posts[indexNextPost] || "";

  console.log(previousPost, nextPost);
  return {
    props: {
      title: data.title,
      author: data.author,
      linkauthor: data.linkauthor,
      imagepost: data.imagepost,
      publisher: first_publication_date || "",
      content: data.content,
      previousPost,
      nextPost,
    },
  };
};
