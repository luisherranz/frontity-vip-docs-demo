import Code from "./code";

const codeBlockProcessor = {
  name: "code-block-syntax",
  test: ({ node }) =>
    node.component === "pre" && node.props.className?.match(/prism/),
  processor: ({ node }) => {
    const code = node.children.find((child) => child.component === "code");
    const [_, language] = code.props.className?.match(/lang-(\w*)\b/);
    node.props.className = `${node.parent.props.className} language-${language}`;
    code.component = Code;
    code.props.language = language;
    return node;
  },
};

export default {
  name: "code-block-syntax",
  libraries: {
    html2react: {
      processors: [codeBlockProcessor],
    },
  },
};
