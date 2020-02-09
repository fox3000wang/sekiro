import styled from "styled-components";
import * as github from "../../assets/vita/github.png";

/**
 * clear
 * clip
 * content
 * counter-increment
 * display
 * float
 *
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
  /* background: rgba(30, 30, 30, 1) url(${github}) center center/50% 50% no-repeat fixed; */
  background: #666 url(${github}) center center/50% 50% no-repeat fixed;
  display: flex;
  justify-content: center;
  font-family: PingFangSC-Semibold;
  font-size: 0.18rem;
  height: 100%;
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
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  width: 5rem;
  height: 0.5rem;
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
export const Border = styled(Item)`
  border: 1px #fff solid;
  width: 5rem;
  height: 0.5rem;
  color: #fff;
  margin-left: 0.2rem;
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
 */
export const Font = styled(Item)`
  font: italic;
`;
