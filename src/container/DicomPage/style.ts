import styled from "styled-components";
import * as suo_fang from "../../assets/icons/suo_fang.png";

export const Background = styled.div`
  background: #000;
  display: flex;
  font-size: 0.2rem;
  height: 100%;
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  margin: 0.05rem;
`;

export const Head = styled.div`
  display: flex;
  height: 1rem;
  margin: 0;
`;

export const Line = styled.div`
  background: #0a0;
  height: 100%;
  height: 1px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  height: 100%;
`;

export const Left = styled.div`
  margin-left: 0;
  height: 100%;
  width: 6rem;
`;

export const Center = styled.div`
  background: #00a;
  width: 100%;
  height: 100%;
  border: 0.01rem solid #0a0;
`;

export const Button = styled.div`
  background: url(${suo_fang}) 0.2rem 0.2rem/0.4rem 0.4rem no-repeat;
  padding: 0.7rem 0 0.05rem 0;
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.18rem;
  letter-spacing: 0;
  height: 1rem;
  width: 0.8rem;
  color: #fff;
  cursor: pointer;
  &: hover {
    background-color: #555;
  }
`;
