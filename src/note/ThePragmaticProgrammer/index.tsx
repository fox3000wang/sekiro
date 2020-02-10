import * as React from "react";
import * as Markdown from "react-markdown";
import tpp from "./ThePragmaticProgrammer.md";
// import htmlParser from "react-markdown/plugins/html-parser";

// const parseHtml = htmlParser({
//   isValidNode: node => node.type !== "script",
//   processingInstructions: [
//     /* ... */
//   ]
// });

export default function thePragmaticProgrammer() {
  return (
    <Markdown
      source={tpp}
      escapeHtml={false}
      // astPlugins={[parseHtml]}
    ></Markdown>
  );
}
