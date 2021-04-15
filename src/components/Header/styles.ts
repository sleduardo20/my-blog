import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 10.3rem;
    background: ${theme.colors.gray800};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.lg} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      margin-right: 12rem;
      color: ${theme.colors.yellow500};
      font-size: ${theme.font.size.xxlg};
    }

    ${media.lessThan("medium")`
      svg {
          display: none;
        }
      h1 {
          margin-right: 0;
        }
    `}
  `}
`;

export const Logo = styled.div`
  position: relative;
  width: 18.8rem;
  height: 4.7rem;
`;
