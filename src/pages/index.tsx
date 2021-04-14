import { GetStaticProps } from "next";

import Prismic from "@prismicio/client";

import { Banner } from "components/Banner";
import { CardPost, CardPostProps } from "components/CardPost";
import { Container } from "components/Container";
import { Header } from "components/Header";

import { getClientPrimisc } from "../services/prismic";

import * as S from "./styles";

interface HomeProps {
  srcBanner: string;
  cards: CardPostProps[];
}

const Home = ({ srcBanner, cards }: HomeProps) => {
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

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const prismic = getClientPrimisc();

  const bannerResponse = await prismic.query([
    Prismic.predicates.at("document.type", "banner"),
  ]);

  const cardsResponse = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      orderings: "[document.last_publication_date desc]",
    }
  );

  const banner = String(
    bannerResponse.results.map((result) => result.data.src)
  );

  if (!cardsResponse) {
    throw new Error("Error request prismic");
  }

  const cards = cardsResponse.results.map(
    (card): CardPostProps => ({
      slug: card.uid,
      title: card.data.title,
      subtitle: card.data.subtitle,
      img: card.data.imagepost,
      publisher: card.first_publication_date || "",
    })
  );

  return {
    props: {
      srcBanner: banner,
      cards,
    },
  };
};
