import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: max(100%, 70rem);
  margin: 0 auto;
`;

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 70rem;
    margin: 5.4rem auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
      font-size: ${theme.font.size.xxlg};
      line-height: ${theme.font.lineHeight.lg};
      margin-bottom: ${theme.spacings.lg};

      span {
        margin-top: ${theme.spacings.md};
        display: block;
        font-size: ${theme.font.size.sm};
        font-weight: ${theme.font.weightLight};
        color: ${theme.colors.gray300};
      }
    }

    ${media.lessThan("medium")`
      padding: 0 ${theme.spacings.sm};
    `}
  `}
`;

export const PostImage = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: 70rem;
    height: 45rem;
    border-radius: 8px;
    margin-bottom: 0 auto ${theme.spacings.xxlg};

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
    max-width: 70rem;
    height: 16rem;
    border-top: 1px solid ${theme.colors.gray100};
    border-bottom: 1px solid ${theme.colors.gray100};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${theme.spacings.xxlg} auto;

    ${media.lessThan("medium")`
      flex-direction: column;
      height: 30rem;
    `}

    div {
      width: 52.6rem;

      padding: ${theme.spacings.xs};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 1px solid ${theme.colors.gray100};

      ${media.lessThan("medium")`
        border-right: none;
        margin-bottom: ${theme.spacings.lg};
      `}

      span {
        font-size: ${theme.font.size.sm};
        color: ${theme.colors.gray300};
        margin-bottom: ${theme.spacings.xs};
      }
    }

    div + div {
      text-align: right;
      border-right: none;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

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
    }
  `}
`;
