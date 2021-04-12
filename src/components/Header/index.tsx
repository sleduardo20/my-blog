import Image from "next/image";

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
          <h1>BLOG</h1>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};
