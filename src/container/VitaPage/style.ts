import styled from "styled-components";
import * as photo from "../../assets/vita/photo.png";
import * as github from "../../assets/vita/github.png";
export const Background = styled.div`
  background: rgba(30, 30, 30, 1);
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
  height: 1.5rem;
  margin: 0;
  border-bottom: 0.1rem solid transparent;
  border-color: #fff;
`;

export const Title = styled.h1`
  color: #fff;
  margin-left: 0.2rem;
`;
export const SubTitle = styled.h3`
  color: #fff;
  margin-left: 0.1rem;
`;

export const Github = styled.a`
  position: absolute;
  background: url(${github}) center/0.4rem no-repeat;
  width: 0.4rem;
  height: 0.4rem;
  right: 0.3rem;
  top: 0.3rem;
  cursor: pointer;
  &: hover {
    border-radius: 0.2rem;
  }
`;

export const Shape = styled.div`
  position: absolute;
  background-color: #444;
`;

export const Cube = styled(Shape)`
  right: 1rem;
  top: 1rem;
  width: 0.3rem;
  height: 0.3rem;
`;

export const Circle = styled(Shape)`
  right: 1rem;
  top: 0.4rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
`;

export const Triangle = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.2rem;
  height: 0;
  width: 0;
  border-left: 0.2rem solid transparent;
  border-right: 0.2rem solid transparent;
  border-bottom: 0.4rem solid #444;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: #000;
  white-space: nowrap;
`;

export const Photo = styled.div`
  background: url(${photo}) center left/100% 100% no-repeat;
  width: 2rem;
  height: 2rem;
`;

export const LabelLeft = styled.div`
  color: #aaa;
  margin-left: 0.1rem;
  margin-top: 0.2rem;
`;
export const TextLeft = styled.div`
  color: #fff;
  margin-left: 0.1rem;
  margin-top: 0.05rem;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: #fff;
  border-left: 0.1rem solid #fff;
`;

export const Module = styled.div`
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
`;
export const SubModule = styled.div`
  margin-top: 0.05rem;
  margin-bottom: 0.05rem;
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
`;

export const TheHead = styled.div`
  color: #000;
  font-size: 0.32rem;
  text-align: center;
  white-space: nowrap;
`;

export const Theline = styled.div`
  background-color: #000;
  height: 1px;
  width: 100%;
  margin-left: 0.05rem;
`;

export const Item = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Label = styled.div`
  color: #888;
  margin-top: 0.04rem;
`;
export const Text = styled.div`
  text-align: left;
  color: #000;
  margin-top: 0.02rem;
`;
export const Textarea = styled.div`
  text-align: left;
  color: #000;
  white-space: pre-wrap;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
`;

export const Progress = styled.div`
  overflow: hidden;
  background-color: #f7f7f7;
  background-repeat: repeat-x;
  box-shadow: inset 0 0.01rem 0.04rem rgba(0, 0, 0, 0.1);
  border-radius: 0.1rem;
  height: 0.18rem;
  width: 75%;
  margin-left: 0.04rem;
  margin-top: 0.04rem;
`;

export const Bar = styled.div<{ width: any }>`
  width: ${props => props.width}%;
  height: 100%;
  color: #fff;
  float: left;
  border-radius: 0.08rem;
  background-repeat: repeat-x;
  background-image: linear-gradient(90deg, #ffee66 0%, #ff9933 100%);
`;

export const Icon = styled.div<{ bg: any }>`
  background: url(${props => props.bg}) center top/0.4rem 0.4rem no-repeat;
  width: 0.8rem;
  height: 0.6rem;
  padding: 0.4rem 0 0 0;
  line-height: 0.18rem;
  text-align: center;
`;

export const Foot = styled.div`
  background: #fff;
  text-align: center;
  height: 0.4rem;
  margin: 0;
  color: #aaa;
  border-top: 1px solid transparent;
  border-color: #aaa;
`;
