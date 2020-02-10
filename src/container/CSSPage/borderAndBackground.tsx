import * as React from "react";
import {
  BorderBg,
  Border,
  MultipleBorders,
  MultipleBorders2,
  BackgroundPosition,
  BackgroundOrigin,
  BackgroundPositionCalc,
  HorizontalStripes,
  VerticalStripes,
  DiagonalStripes,
  DiagonalStripes2,
  SubtleStripes,
  PseudorandomStripes,
  BlueprintGrid,
  PolkaDot,
  ConicGradients,
  CheckerboardSVG,
  ContinuousImageBorders,
  VintageEnvelopeBorder,
  MarchingAntsBorder,
  FootnoteStyleBorder
} from "./style";

/**
 * 背景与边框
 */
export default function borderAndBackground() {
  return (
    <BorderBg>
      <Border>半透明</Border>
      <MultipleBorders>多重边框box-shadow</MultipleBorders>
      <MultipleBorders2>多重边框outline</MultipleBorders2>
      <BackgroundPosition>bacskground-position</BackgroundPosition>
      <BackgroundOrigin>background-origin</BackgroundOrigin>
      <BackgroundPositionCalc>background-position-calc</BackgroundPositionCalc>
      <HorizontalStripes></HorizontalStripes>
      <VerticalStripes></VerticalStripes>
      <DiagonalStripes></DiagonalStripes>
      <DiagonalStripes2></DiagonalStripes2>
      <SubtleStripes></SubtleStripes>
      <PseudorandomStripes>随机条纹背景</PseudorandomStripes>
      <BlueprintGrid></BlueprintGrid>
      <PolkaDot></PolkaDot>
      <ConicGradients></ConicGradients>
      <CheckerboardSVG></CheckerboardSVG>
      <ContinuousImageBorders>
        Bacon ipsum dolor amet eu adipisicing elit tongue ground round ex
        fatback proident kielbasa ham hock. Sausage beef beef ribs aliquip
        t-bone mollit.
      </ContinuousImageBorders>
      <VintageEnvelopeBorder>
        Quis beef tri-tip sunt, cupim ut magna salami t-bone. Ut laboris
        bresaola ribeye biltong landjaeger.
      </VintageEnvelopeBorder>
      <MarchingAntsBorder>
        Bacon ipsum dolor amet eu adipisicing elit tongue ground round ex
        fatback proident kielbasa ham hock.
      </MarchingAntsBorder>
      <FootnoteStyleBorder>This is a footnote.</FootnoteStyleBorder>
    </BorderBg>
  );
}
