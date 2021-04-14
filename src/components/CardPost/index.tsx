import Link from "next/link";
import Image from "next/image";

import { getFormatDate } from "../../util/getFormatDate";

import * as S from "./styles";

export interface CardPostProps {
  slug?: string;
  title: string;
  subtitle: string;
  publisher: string;
  img: { url: string };
}

export const CardPost = ({
  slug,
  img,
  title,
  subtitle,
  publisher,
}: CardPostProps) => {
  return (
    <S.Wrapper>
      <S.Colluns>
        <S.CollunImage>
          <Image
            className="image-post"
            src={img.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </S.CollunImage>
        <Link href={`/post/${slug}`}>
          <S.CollunInfo>
            <a>
              <h3>{title}</h3>
            </a>

            <p>{subtitle}</p>

            <span>{getFormatDate(publisher)} | Leitura 4 min</span>
          </S.CollunInfo>
        </Link>
      </S.Colluns>
    </S.Wrapper>
  );
};
