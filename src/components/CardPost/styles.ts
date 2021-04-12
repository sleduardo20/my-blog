import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 47rem;
    height: 28rem;
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
  align-items: center;
  justify-content: center;
`;

export const CollunImage = styled.div`
  position: relative;
  width: 18.7rem;
  height: 100%;
  border-radius: 4px;

  ${media.lessThan("medium")`
      display: none;
  `}
`;

export const CollunInfo = styled.div`
  ${({ theme }) => css`
    height: 100%;
    flex: 1;
    padding: ${theme.spacings.sm} ${theme.spacings.xs} ${theme.spacings.xs};

    h3 {
      font-size: ${theme.font.size.md};
      font-weight: ${theme.font.weightBold};
      margin-bottom: ${theme.spacings.md};
      color: ${theme.colors.gray800};
    }

    p {
      max-height: 11rem;
      overflow-y: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;

      font-size: ${theme.font.size.md};
      font-weight: ${theme.font.weightLight};
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
      font-weight: ${theme.font.weightRegular};
      color: ${theme.colors.gray300};
    }
  `}
`;