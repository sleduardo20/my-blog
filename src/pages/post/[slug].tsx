import Image from "next/image";
import Link from "next/link";
import { Params } from "next/dist/next-server/server/router";

import { GetStaticPaths, GetStaticProps } from "next";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import Prismic from "@prismicio/client";
import { getClientPrimisc } from "services/prismic";

import { Header } from "components/Header";
import { Content, ContentProps } from "components/Content";

import { getFormatDate } from "util/getFormatDate";

import * as S from "./styles";

interface PostProps {
  title: string;
  publisher: string;
  imagepost: {
    url: string;
  };
  content: ContentProps[];
}

const Post = ({ title, publisher, imagepost, content }: PostProps) => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <h1>
          {title}
          <span>{getFormatDate(publisher)} | 4 min read </span>
        </h1>

        <S.PostImage>
          <Image
            className="post-image"
            src={imagepost.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </S.PostImage>

        {content.map((item) => (
          <Content key={item.heading} {...item} />
        ))}

        <S.NextPreviowsPosts>
          <div>
            <span>Post Anterior</span>
            <Link href="http://#">
              <a>
                <RiArrowLeftSLine />
                <strong>
                  Beyond the hashtag: Applying semiotics to web design Beyond
                  the hashtag: Applying semiotics to web design
                </strong>
              </a>
            </Link>
          </div>

          <div>
            <span>Proxímo Post</span>
            <Link href="http://#">
              <a>
                <strong>
                  Beyond the hashtag: Applying semiotics to web design Beyond
                  the hashtag: Applying semiotics to web design
                </strong>
                <RiArrowRightSLine />
              </a>
            </Link>
          </div>
        </S.NextPreviowsPosts>

        <h3>Comentarios</h3>
      </S.Wrapper>
    </S.Container>
  );
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
