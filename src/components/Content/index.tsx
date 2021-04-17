import { RichText } from "prismic-dom";

import * as S from "./styles";

type Body = {
  text: string;
};

export interface ContentProps {
  heading?: string;
  body: Body[];
  imagecontent: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    };
  };
}

export const Content = ({ heading, body, imagecontent }: ContentProps) => {
  return (
    <S.Wrapper>
      {!!heading && <h2>{heading}</h2>}
      <S.Body dangerouslySetInnerHTML={{ __html: RichText.asHtml(body) }} />

      {!!imagecontent && (
        <S.Figure>
          <img
            className="post-image"
            src={imagecontent.url}
            alt={imagecontent.alt}
          />
        </S.Figure>
      )}
    </S.Wrapper>
  );
};
