import { Banner } from "components/Banner";
import { CardPost } from "components/CardPost";
import { Container } from "components/Container";
import { Header } from "components/Header";

import * as S from "./styles";

import mockCard from "../components/CardPost/mock";

const Home = () => {
  return (
    <S.Wrapper>
      <Header />
      <Banner />
      <Container>
        <S.Main>
          <h1>Posts Destaques</h1>
          <S.Cards>
            <CardPost {...mockCard} />
            <CardPost {...mockCard} />
            <CardPost {...mockCard} />
            <CardPost {...mockCard} />
            <CardPost {...mockCard} />
          </S.Cards>
        </S.Main>
      </Container>
    </S.Wrapper>
  );
};

export default Home;
