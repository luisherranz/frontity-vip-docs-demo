import React from "react";
import Prism from "./prism-code";
import PrismCSS from "./prism-css";

Prism.manual = true;

const Code = ({ language, children }) => {
  children = Prism.highlight(children, Prism.languages[language], language);
  return (
    <>
      <PrismCSS />
      <code dangerouslySetInnerHTML={{ __html: children }}></code>
    </>
  );
};

export default Code;
