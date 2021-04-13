import Image from "next/image";
import * as S from "./styles";

export interface ContentProps {
  titlecontent?: string;
  p1: string;
  p2?: string;
  p3?: string;
  code?: string;
  imagecontent?: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    };
  };
}

export const Content = ({
  titlecontent,
  p1,
  p2,
  p3,
  code,
  imagecontent,
}: ContentProps) => {
  return (
    <S.Container>
      {!!titlecontent && <h2>{titlecontent}</h2>}

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

      {!!imagecontent && (
        <S.Figure>
          <Image
            className="post-image"
            src={imagecontent.url}
            width={imagecontent.dimensions.width}
            height={imagecontent.dimensions.height}
          />
        </S.Figure>
      )}
    </S.Container>
  );
};
