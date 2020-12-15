import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/code-block-syntax/src/index.js</pre>
    </>
  );
};

export default {
  name: "code-block-syntax",
  roots: {
    codeBlockSyntax: Root
  },
  state: {
    codeBlockSyntax: {}
  },
  actions: {
    codeBlockSyntax: {}
  }
};
