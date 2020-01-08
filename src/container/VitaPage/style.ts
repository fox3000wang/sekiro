import styled from "styled-components";

export const Background = styled.div`
  background: #fff;
  display: flex;
  font-family: PingFangSC-Semibold;
  font-size: 0.2rem;
  height: 100%;
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  /* margin: 0.05rem; */
`;

export const Head = styled.div`
  background: #222;
  display: flex;
  align-items: center;
  height: 1.5rem;
  margin: 0;
`;

export const Title = styled.div`
  font-size: 0.35rem;
  color: #fff;
  margin-left: 0.2rem;
`;
export const SubTitle = styled.div`
  font-size: 0.2rem;
  color: #fff;
  margin-left: 0.1rem;
`;

export const Shape = styled.div`
  position: absolute;
  background-color: #444;
`;

export const Cube = styled(Shape)`
  right: 0.3rem;
  top: 0.3rem;
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

export const Line = styled.div`
  background: #fff;
  height: 0.1rem;
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
