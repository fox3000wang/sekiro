import styled from "styled-components";
import * as github from "../../assets/vita/github.png";

/******************************************************************************
 * 形状
 */
export const ShapeBg = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: #fff center right/2% 2% repeat fixed;
  padding: 0.05rem;
`;

const Shape = styled.div`
  display: inline-block;
  width: 1.6rem;
  height: 1rem;
  border: 0;
  margin: 0.1rem;
  padding: 0.1rem;
  background: #0a0;
`;
const Quarter = styled(Shape)`
  background: #fb3;
`;

export const QuarterEllipse1 = styled(Quarter)`
  border-radius: 100% 0 0 0;
`;
export const QuarterEllipse2 = styled(Quarter)`
  border-radius: 0 100% 0 0;
`;
export const QuarterEllipse3 = styled(Quarter)`
  border-radius: 0 0 100% 0;
`;
export const QuarterEllipse4 = styled(Quarter)`
  border-radius: 0 0 0 100%;
`;

export const Parallelograms = styled(Shape)`
  background: #58a;
  font: bold 200%/1 sans-serif;
  transform: skewX(-45deg);
`;

export const DiamondImagesViaClipPath = styled.div`
  background: url(${github}) 100% 100% no-repeat;
  width: 2rem;
  height: 2rem;
  margin: 0.2rem;
  -webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  transition: 1s;
`;

export const BeveledCorners = styled.div`
  background: linear-gradient(135deg, transparent 15px, #58a 0) top left,
    linear-gradient(-135deg, transparent 15px, #58a 0) top right,
    linear-gradient(-45deg, transparent 15px, #58a 0) bottom right,
    linear-gradient(45deg, transparent 15px, #58a 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;

  padding: 1em 1.2em;
  max-width: 12em;
  color: white;
  font: 150%/1.6 Baskerville, Palatino, serif;
`;

export const ScoopCorners = styled.div`
  background: radial-gradient(circle at top left, transparent 0.2rem, #58a 0)
      top left,
    radial-gradient(circle at top right, transparent 0.2rem, #58a 0) top right,
    radial-gradient(circle at bottom right, transparent 0.2rem, #58a 0) bottom
      right,
    radial-gradient(circle at bottom left, transparent 0.2rem, #58a 0) bottom
      left;
  background-size: 50% 50%;
  background-repeat: no-repeat;

  /* padding: 0.2rem 0.5rem; */
  padding: 0.2rem;
  max-width: 4.2rem;
  color: white;
  /* 改变 padding 和 font 都有可能会让图形中间出一条线。
    在不同浏览器上表现还不一样。 切角的功能慎用啊！
  /* font: 130%/1.6 Baskerville, Palatino, serif; */
`;

/**
 * 未实现
 * http://dabblet.com/gist/66e1e52ac2a44ad87aa4
 */
export const Pie = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;
  line-height: 100px;
  background: yellowgreen;
  color: transparent;
  text-align: center;
  border-radius: 50%;
  background-image: linear-gradient(to right, transparent 50%, #655 0);
`;

/******************************************************************************
 * 背景与边框
 */
export const BorderBg = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.05rem;

  background: hsl(20, 40%, 90%);
  background-image: linear-gradient(90deg, #111 11px, transparent 0),
    linear-gradient(90deg, #222 23px, transparent 0),
    linear-gradient(90deg, #333 23px, transparent 0);
  background-size: 83px 100%, 61px 100%, 41px 100%;
`;

const Bg = styled.div`
  width: 2.2rem;
  min-height: 1rem;
  padding: 0.05rem;
  margin: 0.05rem auto 0;
  font: 100%/1.5 sans-serif;
`;

/**
 * background-clip
 *
 */
export const Border = styled(Bg)`
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  background: white 10% 10%;
  background-clip: padding-box;
  color: #000;
`;

/**
 * box-shadow
 *
 * PS:通过outline属性实现的“边框”不会贴合元素的圆角，不过 这一行为在未来可能会发生变化
 *
 */
export const MultipleBorders = styled(Bg)`
  background: yellowgreen;
  box-shadow: 0 0 0 10px #655, 0 0 0 15px deeppink,
    0 2px 5px 15px rgba(0, 0, 0, 0.6);
`;

/**
 * outline
 *
 */
export const MultipleBorders2 = styled(Bg)`
  background: yellowgreen;
  border: 10px solid #655;
  outline: 5px solid deeppink;
`;

const SvgBg = styled(Bg)`
  background: url(http://csssecrets.io/images/code-pirate.svg) no-repeat bottom
    right #58a;
`;

export const BackgroundPosition = styled(SvgBg)`
  background-position: right 0.2rem bottom 0.1rem;
`;

export const BackgroundOrigin = styled(SvgBg)`
  background-origin: content-box;
`;

export const BackgroundPositionCalc = styled(SvgBg)`
  background-position: calc(100% - 20px) calc(100% - 10px);
`;

/**
 * 条纹背景
 * linear-gradient
 * */
export const HorizontalStripes = styled(Bg)`
  background: linear-gradient(#fb3 50%, #58a 0);
  background-size: 100% 30px;
`;

export const VerticalStripes = styled(Bg)`
  background: linear-gradient(to right, #fb3 50%, #58a 0);
  background-size: 30px 100%;
`;

export const DiagonalStripes = styled(Bg)`
  background: linear-gradient(
    45deg,
    #fb3 25%,
    #58a 0,
    #58a 50%,
    #fb3 0,
    #fb3 75%,
    #58a 0
  );
  background-size: 42.4px 42.4px;
`;
export const DiagonalStripes2 = styled(Bg)`
  background: repeating-linear-gradient(
    60deg,
    #fb3,
    #fb3 15px,
    #58a 0,
    #58a 30px
  );
`;

export const SubtleStripes = styled(Bg)`
  background: #58a;
  background-image: repeating-linear-gradient(
    30deg,
    hsla(0, 0%, 100%, 0.1),
    hsla(0, 0%, 100%, 0.1) 15px,
    transparent 0,
    transparent 0.3rem
  );
`;

export const PseudorandomStripes = styled(Bg)`
  background: hsl(20, 40%, 90%);
  background-image: linear-gradient(90deg, #fb3 11px, transparent 0),
    linear-gradient(90deg, #ab4 23px, transparent 0),
    linear-gradient(90deg, #655 23px, transparent 0);
  background-size: 83px 100%, 61px 100%, 41px 100%;
`;

export const BlueprintGrid = styled(Bg)`
  background: #58a;
  background-image: linear-gradient(white 2px, transparent 0),
    linear-gradient(90deg, white 2px, transparent 0),
    linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
    linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
`;

export const PolkaDot = styled(Bg)`
  background: #655;
  background-image: radial-gradient(tan 20%, transparent 0),
    radial-gradient(tan 20%, transparent 0);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
`;

export const ConicGradients = styled(Bg)`
  background: red;
  background: conic-gradient(limegreen, green, limegreen);
`;

export const CheckerboardSVG = styled(Bg)`
  background: #eee
    url('data:image/svg+xml,\
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25" >\
            <rect x="50" width="50" height="50" />\
            <rect y="50" width="50" height="50" />\
            </svg>');
  background-size: 30px 30px;
`;

export const ContinuousImageBorders = styled(Bg)`
  border: 1em solid transparent;
  background: linear-gradient(white, white) padding-box,
    url(http://csssecrets.io/images/stone-art.jpg) border-box 0 / cover;

  width: 21em;
  padding: 1em;
  overflow: hidden;
  resize: both;
  font: 100%/1.6 Baskerville, Palatino, serif;
`;

export const VintageEnvelopeBorder = styled(Bg)`
  padding: 1em;
  border: 1em solid transparent;
  background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(
        -45deg,
        red 0,
        red 12.5%,
        transparent 0,
        transparent 25%,
        #58a 0,
        #58a 37.5%,
        transparent 0,
        transparent 50%
      )
      0 / 6em 6em;

  max-width: 20em;
  font: 100%/1.6 Baskerville, Palatino, serif;
`;

export const MarchingAntsBorder = styled(Bg)`
  padding: 1em;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(
        -45deg,
        black 0,
        black 25%,
        transparent 0,
        transparent 50%
      )
      0 / 0.6em 0.6em;
  animation: ants 12s linear infinite;

  max-width: 20em;
  font: 100%/1.6 Baskerville, Palatino, serif;
`;

export const FootnoteStyleBorder = styled(Bg)`
  background: #fff;
  border-top: 0.15em solid transparent;
  border-image: 100% 0 0 linear-gradient(90deg, currentColor 4em, transparent 0);
  padding-top: 0.5em;
  font: 220%/1.4 Baskerville, Palatino, serif;
`;

/******************************************************************************
 * clear
 * clip
 * content
 * counter-increment
 * display
 * float
 * outline
 * overflow
 */

/**
 * background 这个是一种简写可以在一个声明中描述所有背景属性
 * [ background-color || background-image || background-repeat
 * || background-attachment || background-position
 * ]
 *
 * background-attachment
 *   文档滚动时候背景图像是否随着元素滚动
 * scroll	默认值。背景图像会随着页面其余部分的滚动而移动。
 * fixed	当页面的其余部分滚动时，背景图像不会移动。
 * inherit	规定应该从父元素继承 background-attachment 属性的设置。
 */
export const Background = styled.div`
  background: rgba(30, 30, 30, 1);
  /* background: #666 url(${github}) center right/30% 30% no-repeat fixed; */
  display: flex;
  justify-content: center;
  font-family: PingFangSC-Semibold;
  font-size: 0.18rem;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Layout = styled.div`
  width: 10rem;
  height: 100%;
`;

export const Head = styled.div`
  background: #000;
  display: flex;
  align-items: center;
  height: 0.5rem;
  margin: 0;
  border-color: #fff;
  margin-bottom: 0.05rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  width: 5rem;
  height: 0.4rem;
`;

/**
 * border
 * [border-width || border-style || border-color] | inherit
 *
 * border-style
 * none	定义无边框。
 * hidden	与 "none" 相同。不过应用于表时除外，对于表，hidden 用于解决边框冲突。
 * dotted	定义点状边框。在大多数浏览器中呈现为实线。
 * dashed	定义虚线。在大多数浏览器中呈现为实线。
 * solid	定义实线。
 * double	定义双线。双线的宽度等于 border-width 的值。
 * groove	定义 3D 凹槽边框。其效果取决于 border-color 的值。
 * ridge	定义 3D 垄状边框。其效果取决于 border-color 的值。
 * inset	定义 3D inset 边框。其效果取决于 border-color 的值。
 * outset	定义 3D outset 边框。其效果取决于 border-color 的值。
 * inherit	规定应该从父元素继承边框样式。
 */
export const Border2 = styled(Item)`
  border: 1px #fff solid;
  width: 5rem;
  height: 0.5rem;
  color: #fff;
  margin-left: 0.2rem;
  border-radius: 1rem;
`;

/**
 * cursor 属性规定要显示的光标的类型（形状）。
 *
 * url	需使用的自定义光标的 URL。
 *      注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。
 * default	默认光标（通常是一个箭头）
 * auto	默认。浏览器设置的光标。
 * crosshair	光标呈现为十字线。
 * pointer	光标呈现为指示链接的指针（一只手）
 * move	此光标指示某对象可被移动。
 * e-resize	此光标指示矩形框的边缘可被向右（东）移动。
 * ne-resize	此光标指示矩形框的边缘可被向上及向右移动（北/东）。
 * nw-resize	此光标指示矩形框的边缘可被向上及向左移动（北/西）。
 * n-resize	此光标指示矩形框的边缘可被向上（北）移动。
 * se-resize	此光标指示矩形框的边缘可被向下及向右移动（南/东）。
 * sw-resize	此光标指示矩形框的边缘可被向下及向左移动（南/西）。
 * s-resize	此光标指示矩形框的边缘可被向下移动（南）。
 * w-resize	此光标指示矩形框的边缘可被向左移动（西）。
 * text	此光标指示文本。
 * wait	此光标指示程序正忙（通常是一只表或沙漏）。
 * help	此光标指示可用的帮助（通常是一个问号或一个气球）。
 */
export const Cursor = styled(Item)`
  cursor: pointer;
`;

/**
 * font
 * [[font-style || font-variant || font-weight] ? font-size [/ line-height] ? font-family ]
 *  ]
 *
 * font-style
 * normal	默认值。浏览器显示一个标准的字体样式。
 * italic	浏览器会显示一个斜体的字体样式。
 * oblique	浏览器会显示一个倾斜的字体样式。
 * inherit	规定应该从父元素继承字体样式。
 *
 * font-variant
 *   属性设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，
 *   但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。
 * normal	默认值。浏览器会显示一个标准的字体。
 * small-caps	浏览器会显示小型大写字母的字体。
 * inherit	规定应该从父元素继承 font-variant 属性的值。
 *
 * letter-spacing 字符之间插入多少空间，默认0
 *
 * text-align
 * left	把文本排列到左边。默认值：由浏览器决定。
 * right	把文本排列到右边。
 * center	把文本排列到中间。
 * justify	实现两端对齐文本效果。
 * inherit	规定应该从父元素继承 text-align 属性的值。
 *
 * text-decoration
 * none	默认。定义标准的文本。
 * underline	定义文本下的一条线。
 * overline	定义文本上的一条线。
 * line-through	定义穿过文本下的一条线。
 * blink	定义闪烁的文本。
 * inherit	规定应该从父元素继承
 *
 * text-indent 属性规定文本块中首行文本的缩进
 *
 * text-transform 属性控制文本的大小写。
 * none	默认。定义带有小写字母和大写字母的标准的文本。
 * capitalize	文本中的每个单词以大写字母开头。
 * uppercase	定义仅有大写字母。
 * lowercase	定义无大写字母，仅有小写字母。
 * inherit	规定应该从父元素继承 text-transform 属性的值。
 *
 */
export const Font = styled(Item)`
  background: #aaa;
  font-style: italic;
  font-size: 0.3rem;
  font-variant: small-caps;
  font-weight: bold;
  letter-spacing: -0.03rem;
  line-height: 0.4rem;
  text-align: center;
  text-decoration: line-through;
  text-indent: 10%;
  text-transform: capitalize;
`;

/**
 * list-style
 *
 * list-style-image
 * URL	图像的路径。
 * none	默认。无图形被显示。
 * inherit	规定应该从父元素继承 list-style-image 属性的值。
 *
 * list-style-position
 * inside	列表项目标记放置在文本以内，且环绕文本根据标记对齐。
 * outside	默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。
 * inherit	规定应该从父元素继承 list-style-position 属性的值。
 *
 * list-style-type
 * none	无标记。
 * disc	默认。标记是实心圆。
 * circle	标记是空心圆。
 * square	标记是实心方块。
 * decimal	标记是数字。
 * decimal-leading-zero	0开头的数字标记。(01, 02, 03, 等。)
 * lower-roman	小写罗马数字(i, ii, iii, iv, v, 等。)
 * upper-roman	大写罗马数字(I, II, III, IV, V, 等。)
 * lower-alpha	小写英文字母The marker is lower-alpha (a, b, c, d, e, 等。)
 * upper-alpha	大写英文字母The marker is upper-alpha (A, B, C, D, E, 等。)
 * lower-greek	小写希腊字母(alpha, beta, gamma, 等。)
 * lower-latin	小写拉丁字母(a, b, c, d, e, 等。)
 * upper-latin	大写拉丁字母(A, B, C, D, E, 等。)
 * hebrew	传统的希伯来编号方式
 * armenian	传统的亚美尼亚编号方式
 * georgian	传统的乔治亚编号方式(an, ban, gan, 等。)
 * cjk-ideographic	简单的表意数字
 * hiragana	标记是：a, i, u, e, o, ka, ki, 等。（日文片假名）
 * katakana	标记是：A, I, U, E, O, KA, KI, 等。（日文片假名）
 * hiragana-iroha	标记是：i, ro, ha, ni, ho, he, to, 等。（日文片假名）
 * katakana-iroha	标记是：I, RO, HA, NI, HO, HE, TO, 等。（日文片假名）
 */
export const List = styled.div`
  list-style: circle url(${github});
  left: 2rem;
`;

/**
 * margin 外边距
 * 4个值分别是 12点 3点，6点，9点 顺时针的位置。
 */
export const Margin = styled(Item)`
  margin: 0.1rem 0.2rem 0.3rem 0.4rem;
  border: 1px #fff solid;
`;

/**
 * padding 内边距宽度
 * 4个值分别是 12点 3点，6点，9点 顺时针的位置。
 */
export const Padding = styled.div`
  padding: 0.1rem 0.2rem 0.3rem 0.4rem;
  border: 1px #fff solid;
`;

/**
 * position
 *
 * absolute	生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
 *          元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
 * fixed	  生成绝对定位的元素，相对于浏览器窗口进行定位。
 *          元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
 * relative 生成相对定位的元素，相对于其正常位置进行定位。
 *          因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
 * static	  默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
 * inherit	规定应该从父元素继承 position 属性的值。
 */
export const Position = styled(Item)`
  position: absolute;
  left: 0;
`;

/**
 * white-space 属性设置如何处理元素内的空白。
 * normal	默认。空白会被浏览器忽略。
 * pre	空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。
 * nowrap	文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
 * pre-wrap	保留空白符序列，但是正常地进行换行。
 * pre-line	合并空白符序列，但是保留换行符。
 * inherit	规定应该从父元素继承 white-space 属性的值。
 */
export const WhiteSpace = styled(Item)`
  white-space: nowrap;
`;
