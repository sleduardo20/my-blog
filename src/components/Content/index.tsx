import Image from "next/image";
import * as S from "./styles";

export interface ContentProps {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  code: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export const Content = ({ title, p1, p2, p3, code, image }: ContentProps) => {
  return (
    <S.Container>
      {!!title && <h2>{title}</h2>}
      <S.Text>{p1}</S.Text>
      {!!p2 && <S.Text>{p2}</S.Text>}
      {!!p3 && <S.Text>{p3}</S.Text>}

      {!!code && (
        <S.Code>
          <pre>
            <code>{code}</code>
          </pre>
        </S.Code>
      )}

      {!!image && (
        <S.Figure>
          <Image
            className="post-image"
            src={image.src}
            width={image.width}
            height={image.height}
          />
        </S.Figure>
      )}
    </S.Container>
  );
};
