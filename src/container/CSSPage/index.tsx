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
  Padding,
  BorderBg,
  Border,
  MultipleBorders,
  MultipleBorders2,
  BackgroundPosition,
  BackgroundOrigin,
  BackgroundPositionCalc,
  HorizontalStripes
} from "./style";

/**
 * 整理css读书笔记用
 */
function CSSPage() {
  return (
    <Background>
      <Layout>
        <Head>css2 css3</Head>
        <Body>
          <BorderBg>
            <Border>半透明</Border>
            <MultipleBorders>多重边框box-shadow</MultipleBorders>
            <MultipleBorders2>多重边框outline</MultipleBorders2>
            <BackgroundPosition>bacskground-position</BackgroundPosition>
            <BackgroundOrigin>background-origin</BackgroundOrigin>
            <BackgroundPositionCalc>
              background-position-calc
            </BackgroundPositionCalc>
            <HorizontalStripes>条纹背景</HorizontalStripes>
          </BorderBg>
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
