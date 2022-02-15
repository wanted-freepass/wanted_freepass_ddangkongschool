import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  height: 921px;
  border-radius: 0px;
  position: relative;
  dispalay: flex;
  background-color: #f9f9f9;
`;

export const Container = styled.div`
  width: 1140px;
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
  width: 586px;
  height: 72px;
  left: calc(50% - 586px / 2);
  top: 150px;
`;

export const Punched = styled.div``;

export const BigCircle = styled.div`
  clip-path: circle(50%);
  position: absolute;
  width: 80px;
  height: 80px;
  left: 1011px;
  top: 282px;
  background: #ffffff;
  z-index: 99;
  mix-blend-mode: overlay;
`;

export const Coupon = styled.div`
  position: absolute;
  width: 1140px;
  height: 449px;
  left: calc(50% - 1140px / 2);
  top: 322px;
  background: #ffb100;
  box-shadow: 30px 30px 40px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.h3`
  text-align: center;
  color: white;
`;
export const Subject = styled.h2`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 14px;
`;

export const Right = styled.div``;
