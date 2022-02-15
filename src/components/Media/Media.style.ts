import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  height: 921px;
  border-radius: 0px;
  position: relative;
  display: flex;
  background-color: #fff;
`;

export const Container = styled.div`
  width: 1140px;
  height: 1397px;
`;

export const Title = styled.h2`
  font-family: Noto Sans KR;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: 0em;
  text-align: center;
  color: #333333;
  display: flex;
  align-items: center;
  text-align: center;
  position: absolute;
  height: 72px;
  left: calc(50% - 586px / 2);
  top: 150px;
`;

export const Description = styled.p`
  position: absolute;
  width: 640px;
  height: 75px;
  left: calc(50% - 640px / 2);
  top: 342px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #333333;
`;
