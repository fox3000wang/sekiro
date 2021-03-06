import * as React from "react";
import {
  Background,
  Layout,
  Head,
  Body,
  Border2,
  Cursor,
  Font,
  List,
  Margin,
  Padding
} from "./style";
import borderAndBackground from "./borderAndBackground";
import shape from "./shape";
import animation from "./animation";

/**
 * 整理css读书笔记用
 */
function CSSPage() {
  return (
    <Background>
      <Layout>
        <Head>css2 css3</Head>
        <Body>
          {animation()}
          {shape()}
          {borderAndBackground()}
          <div>----------------------------------------------------</div>
          <Border2>border2</Border2>
          <Cursor>cursor</Cursor>
          <Font>font</Font>
          <List>
            <ul>
              <li>li1</li>
              <li>li2</li>
              <li>li3</li>
              <li>li4</li>
            </ul>
          </List>
          <Padding>
            <Margin></Margin>
          </Padding>
        </Body>
      </Layout>
    </Background>
  );
}

export default CSSPage;
