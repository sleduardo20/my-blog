import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div``;

export const Main = styled.main`
  ${({ theme }) => css`
    width: 70rem;
    max-width: 100%;
    margin: 5.4rem auto 0;
    padding: 0 ${theme.spacings.sm};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
      font-size: ${theme.font.size.xxlg};
      line-height: ${theme.font.lineHeight.lg};
      margin-bottom: ${theme.spacings.lg};

      ${media.lessThan("medium")`
        font-size: ${theme.font.size.xlg};
      `}
    }

    a,
    span {
      display: block;
      font-size: ${theme.font.size.sm};
      font-weight: ${theme.font.weightLight};
      color: ${theme.colors.lightBlue};
    }

    span {
      margin-top: ${theme.spacings.xss};
      color: ${theme.colors.gray300};
    }
  `}
`;

export const PostImage = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: 70rem;
    height: 45rem;
    border-radius: 8px;
    margin: ${theme.spacings.md} auto ${theme.spacings.xxlg};

    .post-image {
      border-radius: 8px;
    }

    ${media.lessThan("medium")`
      width: min(100%, 70rem);
      
    `}

    ${media.lessThan("small")`
      width: min(100%, 45rem);
      height: 25rem;
    `}
  `}
`;

export const NextPreviowsPosts = styled.div`
  ${({ theme }) => css`
    height: 16rem;
    width: 100%;
    border-top: 1px solid ${theme.colors.gray100};
    border-bottom: 1px solid ${theme.colors.gray100};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${theme.spacings.xlg} auto;

    ${media.lessThan("medium")`
      flex-direction: column;
      height: 100%;
    `}

    div {
      padding: ${theme.spacings.xs} 0;
      display: flex;
      align-items: center;
      flex-direction: column;

      ${media.lessThan("medium")`
        align-items: center;
        border-right: none;
        margin-bottom: ${theme.spacings.lg};
      `}

      span {
        display: block;
        font-size: ${theme.font.size.sm};
        color: ${theme.colors.gray300};
        margin-bottom: ${theme.spacings.xs};
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        strong {
          max-width: 30rem;
          font-weight: ${theme.font.weightRegular};
          color: ${theme.colors.yellow500};
          margin: 0 ${theme.spacings.xs};
        }

        svg {
          width: 34px;
          height: 34px;
          color: ${theme.colors.yellow500};
        }

        &:hover {
          strong {
            color: ${theme.colors.darkBlue};
            transition: color 0.4s;
          }

          svg {
            color: ${theme.colors.darkBlue};
            transition: color 0.4s;
          }
        }
      }
    }

    div + div {
      text-align: right;
      border-right: none;
    }
  `}
`;
