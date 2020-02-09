import * as React from "react";
import {
  Background,
  Layout,
  Head,
  Body,
  Border,
  Cursor,
  Font,
  List,
  Margin,
  Padding
} from "./style";

/**
 * 整理css读书笔记用
 */
function CSSPage() {
  return (
    <Background>
      <Layout>
        ok
        <Head></Head>
        <Body>
          <Border>border</Border>
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
