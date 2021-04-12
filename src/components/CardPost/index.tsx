import Image from "next/image";

import * as S from "./styles";

export interface CardPostProps {
  src: string;
  title: string;
  subtitle: string;
  publisher: string;
  timeRead: string;
}

export const CardPost = ({
  src,
  title,
  subtitle,
  publisher,
  timeRead,
}: CardPostProps) => {
  return (
    <S.Wrapper>
      <S.Colluns>
        <S.CollunImage>
          <Image
            src={src}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </S.CollunImage>
        <S.CollunInfo>
          <h3>{title}</h3>

          <p>{subtitle}</p>

          <span>
            {publisher} | {timeRead} min read
          </span>
        </S.CollunInfo>
      </S.Colluns>
    </S.Wrapper>
  );
};
