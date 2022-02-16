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

export const Coupon = styled.div`
  position: absolute;
  width: 1140px;
  height: 449px;
  left: calc(50% - 1140px / 2);
  top: 322px;
  box-shadow: 30px 30px 40px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url('/images/downloads/coupon.png');
  background-position: bottom -68px right -48px;
  background-size: 1240px 535px;
  background-repeat: no-repeat;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.img`
  width: 155px;
  height: 50px;
`;
export const Subject = styled.h2`
  margin: 30px;
  font-family: S-Core Dream;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 72px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #333333;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 36px;
  font-style: normal;
  font-weight: normal;
  color: #333333;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bubble = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  padding: 10px 20px;
  color: #f9f9f9;
  font-size: 14px;
  line-height: 24px;
  position: relative;
  margin-bottom: 18px;

  &:after {
    content: '';
    position: absolute;
    left: calc(50% - 16px / 2);
    bottom: -12px;
    width: 0;
    height: 0;
    border-top: 12px solid rgba(0, 0, 0, 0.5);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`;

export const Button = styled.button`
  background-color: #333333;
  border-radius: 50px;
  padding: 24px 40px;
  display: flex;
  align-items: center;
`;

export const Icons = styled.img`
  width: 24px;
  margin-right: 17px;
`;

export const BtnTitle = styled.span`
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: #f9f9f9;
`;
