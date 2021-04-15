import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

import { useEffect, useState } from "react";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { getFormatDate } from "util/getFormatDate";

import { Header } from "components/Header";
import { Content, ContentProps } from "components/Content";
import { RichText } from "prismic-dom";
import * as S from "./styles";

export interface PostProps {
  title: string;
  author: string;
  linkauthor: string;
  publisher: string;
  imagepost: {
    url: string;
  };
  content: ContentProps[];
  previousPost: {
    uid: string;
    title: string;
  };
  nextPost: {
    uid: string;
    title: string;
  };
}

export const TemplatePost = ({
  title,
  author,
  linkauthor,
  publisher,
  imagepost,
  content,
  previousPost,
  nextPost,
}: PostProps) => {
  const router = useRouter();

  const [totalWordsPost, setTotalWordsPost] = useState([]);

  useEffect(() => {
    const wordsContent = content.reduce((acc: any, item, index) => {
      acc[index] = item.heading
        ? item.heading.split(" ").length
        : 0 + RichText.asText(item.body).split(" ").length;

      return acc;
    }, []);

    setTotalWordsPost(wordsContent);
  }, [content]);

  if (router.isFallback) {
    return <h2>Carregando...</h2>;
  }

  const totalWords = totalWordsPost.reduce((acc, word) => acc + word, 0);

  const readingTime = Math.round(totalWords / 90);

  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <h1>{title}</h1>

        <Link href={linkauthor} passHref>
          <a target="_blank"> @{author}</a>
        </Link>
        <span>
          {getFormatDate(publisher)} | {readingTime} min
        </span>

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
          {previousPost && (
            <div>
              <span>Post Anterior</span>
              <Link href={`/post/${previousPost.uid}`}>
                <a>
                  <RiArrowLeftSLine />
                  <strong>{previousPost.title}</strong>
                </a>
              </Link>
            </div>
          )}

          {nextPost && (
            <div>
              <span>Proxímo Post</span>
              <Link href={`/post/${nextPost.uid}`}>
                <a>
                  <strong>{nextPost.title}</strong>
                  <RiArrowRightSLine />
                </a>
              </Link>
            </div>
          )}
        </S.NextPreviowsPosts>

        <h3>Comentarios</h3>
      </S.Wrapper>
    </S.Container>
  );
};
