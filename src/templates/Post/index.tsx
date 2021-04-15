import Image from "next/image";
import Link from "next/link";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { getFormatDate } from "util/getFormatDate";

import { Header } from "components/Header";
import { Content, ContentProps } from "components/Content";

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
}

export const TemplatePost = ({
  title,
  author,
  linkauthor,
  publisher,
  imagepost,
  content,
}: PostProps) => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <h1>{title}</h1>

        <Link href={linkauthor} passHref>
          <a target="_blank"> @{author}</a>
        </Link>
        <span>{getFormatDate(publisher)} | 4 min read </span>

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
