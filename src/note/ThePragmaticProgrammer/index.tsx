import * as React from "react";
import * as Markdown from "react-markdown";
import { Background } from "./style";
import tpp from "./ThePragmaticProgrammer.md";

export default function thePragmaticProgrammer() {
  return (
    <Background>
      <Markdown source={tpp} escapeHtml={false}></Markdown>
    </Background>
  );
}
