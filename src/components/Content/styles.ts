import styled, { css } from "styled-components";

export const Container = styled.aside`
  ${({ theme }) => css`
    max-width: 70rem;
    height: max-content;
    padding: 0 ${theme.spacings.xs};
    margin: ${theme.spacings.xss} auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      width: 100%;
      align-items: flex-start;
      margin-bottom: ${theme.spacings.lg};
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    p,
    li {
      text-align: justify;
      font-weight: ${theme.font.weightLight};
      line-height: ${theme.font.lineHeight.sm};
      margin-bottom: ${theme.spacings.sm};
    }

    ul,
    ol {
      padding: ${theme.spacings.md} ${theme.spacings.xlg};
      list-style: disc;
      list-style-image: none;
    }

    pre {
      margin: ${theme.spacings.xs} auto;
      background: ${theme.colors.gray100};
      border-radius: 4px;
      padding: ${theme.spacings.sm};
    }

    a {
      color: ${theme.colors.lightBlue};
    }
  `}
`;

export const Figure = styled.div`
  ${({ theme }) => css`
    display: block;
    margin: ${theme.spacings.xlg} 0;
    .post-image {
      border-radius: 8px;
    }
  `}
`;
