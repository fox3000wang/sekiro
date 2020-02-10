import * as React from "react";
import {
  ShapeBg,
  QuarterEllipse1,
  QuarterEllipse2,
  QuarterEllipse3,
  QuarterEllipse4,
  Parallelograms,
  DiamondImages,
  DiamondImage,
  DiamondImagesViaClipPath,
  BeveledCorners,
  ScoopCorners,
  Pie
} from "./style";

export default function shape() {
  return (
    <ShapeBg>
      <QuarterEllipse1></QuarterEllipse1>
      <QuarterEllipse2></QuarterEllipse2>
      <QuarterEllipse3></QuarterEllipse3>
      <QuarterEllipse4></QuarterEllipse4>
      <Parallelograms>平行四边形</Parallelograms>
      <DiamondImages>
        <DiamondImage>貌似翻车了！</DiamondImage>
      </DiamondImages>
      <DiamondImagesViaClipPath></DiamondImagesViaClipPath>
      <BeveledCorners>
        Hey, focus! You’re supposed to be looking at my corners, not reading my
        text. The text is just placeholder!
      </BeveledCorners>
      <ScoopCorners>
        Hey, focus! You’re supposed to be looking at my corners, not reading my
        text. The text is just placeholder!
      </ScoopCorners>
      <Pie>20%</Pie>
    </ShapeBg>
  );
}
