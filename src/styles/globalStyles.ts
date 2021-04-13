import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('../fonts/nunito-v16-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/nunito-v16-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */

  @font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/nunito-v16-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/nunito-v16-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* nunito-700 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/nunito-v16-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/nunito-v16-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* nunito-900 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 900;
  src: local(''),
       url('/fonts/nunito-v16-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/nunito-v16-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    font-size: 62.5%;
  }

  html,body, #__next {
    height: 100%;
  }

  body, input, textarea, button{
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.gray800};
  line-height: ${({ theme }) => theme.font.lineHeight.xsm};
  }

  body {
    background: ${({ theme }) => theme.colors.white100};

  }

  button {
    cursor: pointer;
  }

  a {
  color: inherit;
  text-decoration: none;
  }
`;
