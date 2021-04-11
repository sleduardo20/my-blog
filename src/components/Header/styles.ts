import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 10.3rem;
    background: ${theme.colors.gray800};
    color: ${theme.colors.yellow500};
    font-size: ${theme.font.size.xlg};
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
      flex: 1;
      margin-left: 36.2rem;
    }
  `}
`;
