import Image from "next/image";

import * as S from "./styles";

import { getFormatDate } from "../../util/getFormatDate";

export interface CardPostProps {
  src: string;
  title: string;
  subtitle: string;
  publisher: string;
}

export const CardPost = ({
  src,
  title,
  subtitle,
  publisher,
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

          <span>{getFormatDate(publisher)} | Leitura 4 min</span>
        </S.CollunInfo>
      </S.Colluns>
    </S.Wrapper>
  );
};
