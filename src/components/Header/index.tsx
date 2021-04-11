import Image from "next/image";

import { Container } from "../Container";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <Image
            src="/img/logo.svg"
            height={47}
            width={188}
            alt="logo eduardo lima"
          />
          <h1>BLOG</h1>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};
