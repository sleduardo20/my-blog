import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: min(100%, 117rem);
  margin: 0 auto;

  ${media.lessThan("medium")`
    width: min(100%, 76.8rem);
  `}

  ${media.lessThan("small")`
    width: min(100%, 45rem);
  `}
`;
