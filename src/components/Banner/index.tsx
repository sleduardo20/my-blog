import Image from "next/image";

import * as S from "./styles";

export const Banner = () => {
  return (
    <S.Wrapper>
      <Image
        src="/img/banner.jpg"
        layout="responsive"
        width={1400}
        height={348}
      />
    </S.Wrapper>
  );
};
