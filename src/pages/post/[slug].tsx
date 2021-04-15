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

  const { data, first_publication_date } = await prismic.getByUID(
    "post",
    String(slug),
    {}
  );

  return {
    props: {
      title: data.title,
      imagepost: data.imagepost,
      publisher: first_publication_date || "",
      content: data.content,
    },
  };
};
