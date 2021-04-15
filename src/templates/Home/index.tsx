import { Banner } from "components/Banner";
import { CardPost, CardPostProps } from "components/CardPost";
import { Container } from "components/Container";
import { Header } from "components/Header";

import * as S from "./styles";

export interface HomeProps {
  srcBanner: string;
  cards: CardPostProps[];
}

export const Home = ({ srcBanner, cards }: HomeProps) => {
  return (
    <S.Wrapper>
      <Header />
      <Banner src={srcBanner} />
      <Container>
        <S.Main>
          <h1>Posts Destaques</h1>
          <S.Cards>
            {cards.map((card) => (
              <CardPost key={card.title} {...card} />
            ))}
          </S.Cards>
        </S.Main>
      </Container>
    </S.Wrapper>
  );
};
