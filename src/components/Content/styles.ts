import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.sm};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      align-items: flex-start;
      line-height: ${theme.font.lineHeight.md};
      margin-bottom: ${theme.spacings.lg};
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
   
      p,li {
        text-align: justify;
        font-weight: ${theme.font.weightLight};
        line-height: ${theme.font.lineHeight.sm};
        margin-bottom: ${theme.spacings.sm};
      }

      ul, ol {
        
        list-style: disc;
        list-style-image: none;
      }

      pre {
        white-space: pre-wrap;
        word-break: keep-all;
        font-size: ${theme.font.size.xsm};
        font-weight: ${theme.font.weightLight};
        margin: ${theme.spacings.xs} 0;
        background: ${theme.colors.gray100};
        border-radius: 4px;
        padding: ${theme.spacings.xss};

        ${media.lessThan("medium")`
          font-size: ${theme.font.size.sm};
          word-break: break-all;
        `}
      }

      a {
        display:inline-block;
        word-break: break-all;
        color: ${theme.colors.lightBlue};
      }
    }
  `}
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlg} 0;

    ${media.lessThan("medium")`
      width: 100%;
      max-width: 30rem;
    `}

    img {
      width: 100%;
      background-size: contain;
      background-position: center;
    }

    .post-image {
      border-radius: 8px;
    }
  `}
`;
