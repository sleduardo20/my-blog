export const Comments: React.FC = () => {
  return (
    <section
      ref={(elem) => {
        if (!elem || elem.childNodes.length) {
          return;
        }
        const script = document.createElement("script");
        script.setAttribute("src", "https://utteranc.es/client.js");
        script.setAttribute("crossorigin", "anonymous");
        script.setAttribute("label", "Deixe seu comentário 👍");
        script.async = true;
        script.setAttribute("repo", "sleduardo20/my-blog");
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("theme", "github-light");
        elem.appendChild(script);
      }}
    />
  );
};
