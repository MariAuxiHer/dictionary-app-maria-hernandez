import React from "react";
import "./GitHubLink.css";

export default function GitHubLink(){

return(
    <span className="link-github">
        {" "}
        <a
          href="https://github.com/MariAuxiHer/dictionary-app-maria-hernandez"
          rel="noreferrer"
          target="_blank"
          className="link"
        >
          Open source-code
        </a>{" "}

        <span className="name-maria">by <strong> Maria Hernandez</strong></span>
        
      </span>
)
}