export const mockcontent = {
  heading: "Introdução",
  body: [
    {
      type: "paragraph",
      text:
        "Nós como Devs devemos ser organizados e detalhistas, temos que planejar cada linha de código de uma forma que no futuro quando olhamos novamente aquele código por se só seja auto explicativo e que outros devs podem entender o que está escrito.",
    },
    {
      type: "paragraph",
      text:
        "Quando desenvolvemos aplicações web, sempre nos deparamos com núcleos hexadecimais, espaçamentos, fontes, tamanho de fontes e outras estilizações que sempre temos que ficar digitando em nossos estilos, e se você é como eu que não gosta de ficar digitando núcleos hexadecimais esse artigo é pra você.",
    },
    {
      type: "paragraph",
      text:
        "Para isso que existe os famosos temas ou temas para ser mas exato, com nosso tema criado fica fácil identificar padrões de estilização, e adicionando o typescript nossa experiência no desenvolvimento fica ainda melhor.",
    },
    {
      type: "paragraph",
      text:
        "Neste artigo vou mostrar um passo a passo de acordo com os documentos dos componentes estilizados como podemos configurar nossos temas e ser feliz com nossas estilizações, lembrando que estou usando o typescript nesse projeto.",
    },
    {
      type: "paragraph",
      text:
        "Note que temos o arquivo GlobalStyles para as estilizações globais separado do theme, eu prefiro deixar separados para melhor organização. Logo depois em nosso arquivo theme.ts vamos colocar algumas estilizações que iremos utilizar em uma aplicação:",
      spans: [],
    },
    {
      type: "preformatted",
      text:
        "export default {\n" +
        "  font: {\n" +
        '    family: "Nunito, sans-serif",\n' +
        "    size: {\n" +
        '      xxlg: "4.8rem",\n' +
        '      xlg: "3.2rem",\n' +
        '      lg: "2.4rem",\n' +
        '      md: "2rem",\n' +
        '      sm: "1.6rem",\n' +
        '      xsm: "1.4rem",\n' +
        "    },\n" +
        "    lineHeight: {\n" +
        '      lg: "4.8rem",\n' +
        '      md: "3.6rem",\n' +
        '      sm: "2.8rem",\n' +
        '      xsm: "2.2rem",\n' +
        "    },\n" +
        "    weightLight: 300,\n" +
        "    weightRegular: 400,\n" +
        "    weightMedium: 700,\n" +
        "    weightBold: 900,\n" +
        "  },\n" +
        "  spacings: {\n" +
        '    xxlg: "4.8rem",\n' +
        '    xlg: "3.2rem",\n' +
        '    lg: "2.4rem",\n' +
        '    md: "1.6rem",\n' +
        '    sm: "1.2rem",\n' +
        '    xs: "0.8rem",\n' +
        '    xss: "0.4rem",\n' +
        "  },\n" +
        "  colors: {\n" +
        '    white: "#FFFFFF",\n' +
        '    white100: "#F6F6F6",\n' +
        '    gray100: "#e1e1e6",\n' +
        '    gray300: "#a8a8b3",\n' +
        '    gray800: "#1f2729",\n' +
        '    darkBlue: "#364F6B",\n' +
        '    yellow500: "#EBA417",\n' +
        "  },\n" +
        "} as const;\n",
      spans: [],
    },
  ],

  imagecontent: {
    alt: "descriçao da imagem",
    url:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    dimensions: {
      width: 357,
      height: 661,
    },
  },
};
