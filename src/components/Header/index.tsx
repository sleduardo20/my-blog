import Image from 'next/image';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <Image src="img/logo.svg" height={47} width={188} />
      <h1>BLOG</h1>
    </S.Container>
  );
};
