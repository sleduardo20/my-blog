import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { getFormatDate } from "util/getFormatDate";
import { useTimeRead } from "hooks/useTimeRead";

import { Header } from "components/Header";
import { Content, ContentProps } from "components/Content";


import { Comments } from "components/Comments";
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

  const { readingTime } = useTimeRead({content});
 
  if (router.isFallback) {
    return <h2>Carregando...</h2>;
  }
  
  return (
    <S.Wrapper>
      <Header />

      <S.Main>
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
      </S.Main>
      <Comments />
    </S.Wrapper>
  );
};
