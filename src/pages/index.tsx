import { GetStaticProps } from "next";

import Prismic from "@prismicio/client";

import { Home, HomeProps } from "templates/Home";
import { CardPostProps } from "components/CardPost";

import { getClientPrimisc } from "../services/prismic";

const Index = ({ ...props }: HomeProps) => {
  return <Home {...props} />;
};

export default Index;

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

  const cards = cardsResponse.results.map(
    (card): CardPostProps => ({
      slug: card.uid,
      title: card.data.title,
      author: card.data.author,
      subtitle: card.data.subtitle,
      img: card.data.imagepost,
      publisher: card.first_publication_date || "",
      content: card.data.content
    })
  );

  return {
    props: {
      srcBanner: banner,
      cards,
    },
    revalidate: 60,
  };
};
