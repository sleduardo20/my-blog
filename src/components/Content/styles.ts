import styled, { css } from "styled-components";

export const Container = styled.aside`
  ${({ theme }) => css`
    max-width: 70rem;
    padding: ${theme.spacings.sm};
    margin: 5.4rem auto 0;
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

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weightLight};
    line-height: ${theme.font.lineHeight.sm};
    text-align: justify;
    margin: ${theme.spacings.xs} 0;
  `}
`;

export const Code = styled.pre`
  ${({ theme }) => css`
    width: 90%;
    background: ${theme.colors.gray800};
    display: flex;
    justify-content: center;
    margin: ${theme.spacings.xlg} 0;
    border-radius: ${theme.spacings.xs};

    pre {
      max-width: 100%;
      padding: ${theme.spacings.xs};
      overflow-x: auto;
    }

    code {
      color: ${theme.colors.yellow500};
      padding: 0;
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
