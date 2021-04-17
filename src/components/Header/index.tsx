import Image from "next/image";
import Link from "next/link";
import GithubCornerProps from "react-github-corner";
import ReactTooltip from "react-tooltip";

import { Container } from "../Container";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Logo>
            <Image
              src="/img/logo.svg"
              layout="fill"
              objectFit="contain"
              alt="logo eduardo lima"
            />
          </S.Logo>

          <Link href="/" passHref>
            <a>
              <h1>Blog</h1>
            </a>
          </Link>
          <ReactTooltip
            id="github"
            type="light"
            effect="solid"
            offset={{ right: 116 }}
          >
            Este projeto é open-source, confira o código nesse link 😊.
          </ReactTooltip>

          <GithubCornerProps
            data-tip="ReactTolltip"
            data-for="github"
            href="https://github.com/sleduardo20/my-blog"
            target="_blank"
            size={65}
            bannerColor="#F6F6F6"
            octoColor="#1f2729"
          />
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};
