import styled from "styled-components";

export const Background = styled.div`
  background: #fff;
  display: flex;
  font-family: PingFangSC-Semibold;
  font-size: 0.18rem;
  height: 100%;
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export const Head = styled.div`
  background: #000;
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
  margin: 0;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background: #000;
`;

export const Photo = styled.div`
  margin-left: 0;
  width: 20%;
  background: #000;
`;

export const Label = styled.div`
  color: #aaa;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
`;
export const Text = styled.div`
  color: #fff;
  margin-left: 0.2rem;
  margin-top: 0.05rem;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  background: #aaa;
  width: 79%;
`;
