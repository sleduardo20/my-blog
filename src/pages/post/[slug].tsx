import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { Header } from "components/Header";
import { Content } from "components/Content";
import * as S from "./styles";

import mockContent from "../../components/Content/mock";

const Post = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <h1>
          Configurando o Tema com styled-components e typescript em projetos
          React
          <span> Oct 21, 2020 | 4 min read </span>
        </h1>

        <S.PostImage>
          <Image
            className="post-image"
            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </S.PostImage>
        <Content {...mockContent} />
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
