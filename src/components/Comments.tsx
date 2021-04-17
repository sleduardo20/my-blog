import { Component } from "react";

export class Comments extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    const anchor = document.getElementById("inject-comments-for-uterances");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("label", "Deixe seu comentário 👍");
    script.setAttribute("async", true);
    script.setAttribute("repo", "sleduardo20/my-blog");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");
    anchor.appendChild(script);
  }

  render() {
    return <div id="inject-comments-for-uterances" />;
  }
}
