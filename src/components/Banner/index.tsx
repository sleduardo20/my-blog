import Image from "next/image";

import * as S from "./styles";

export interface BannerProps {
  src: string;
}

export const Banner = ({ src }: BannerProps) => {
  return (
    <S.Wrapper>
      <Image src={src} layout="fill" objectFit="cover" />
    </S.Wrapper>
  );
};
