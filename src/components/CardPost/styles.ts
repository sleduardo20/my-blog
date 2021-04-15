import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 47rem;
    height: 26rem;
    border: 1px solid ${theme.colors.gray100};
    border-radius: ${theme.spacings.xss};
    background: ${theme.colors.white};

    ${media.lessThan("medium")`
      width: 29rem;
      height: 17rem;

    `}
  `}
`;

export const Colluns = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const CollunImage = styled.div`
  position: relative;
  width: 18.7rem;
  height: 100%;
  border-radius: 4px;

  .image-post {
    border-radius: 4px 0 0 4px;
  }

  ${media.lessThan("medium")`
      display: none;
  `}
`;

export const CollunInfo = styled.div`
  ${({ theme }) => css`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacings.lg} ${theme.spacings.xs} ${theme.spacings.xs};

    &:hover {
      cursor: pointer;
      h3 {
        color: ${theme.colors.yellow500};
      }

      p {
        text-decoration: underline;
      }
    }

    ${media.lessThan("medium")`
      padding: ${theme.spacings.xss} ${theme.spacings.xs} ${theme.spacings.xs};
    `}

    h3 {
      font-size: ${theme.font.size.md};
      font-weight: ${theme.font.weightBold};
      color: ${theme.colors.gray800};
      transition: color 0.2s;

      ${media.lessThan("medium")`
        margin-bottom: ${theme.spacings.xss};
      `}
    }

    p {
      max-height: 11rem;
      overflow-y: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;

      font-size: ${theme.font.size.sm};
      font-weight: ${theme.font.weightLight};
      line-height: ${theme.font.lineHeight.xsm};
      color: ${theme.colors.gray800};
      margin-bottom: ${theme.spacings.xlg};

      ${media.lessThan("medium")`
          height: 4.8rem;
          -webkit-line-clamp: 2;
          margin-bottom: ${theme.spacings.xss};
      `}
    }

    span {
      display: block;
      font-size: ${theme.font.size.xsm};
      color: ${theme.colors.gray300};
    }
  `}
`;
