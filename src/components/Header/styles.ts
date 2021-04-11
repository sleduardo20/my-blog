import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 10.3rem;
    background: ${theme.colors.gray800};
    color: ${theme.colors.yellow500};
    font-size: ${theme.font.size.xlg};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
