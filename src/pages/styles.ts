import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`;

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlg};
    padding: ${theme.spacings.xs} ${theme.spacings.xs} ${theme.spacings.xxlg};

    h1 {
      font-size: ${theme.font.size.lg};
      font-weight: ${theme.font.weightBold};
      line-height: ${theme.font.lineHeight.md};
      padding-bottom: ${theme.spacings.lg};
      margin-bottom: ${theme.spacings.xxlg};

      border-bottom: 1px solid ${theme.colors.gray100};
    }
  `}
`;

export const Cards = styled.aside`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 47rem 47rem;
    justify-items: center;
    grid-row-gap: ${theme.spacings.xlg};
    grid-column-gap: 22rem;

    ${media.lessThan("large")`
      grid-template-columns: 1fr;
    `}
  `}
`;
