import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  height: 1397px;
  position: relative;
`;

export const Container = styled.div`
  width: 1140px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  text-align: center;
  color: #333333;
  position: absolute;
  height: 72px;
  left: calc(50% - 586px / 2);
  top: 150px;
`;

export const Description = styled.p`
  position: absolute;
  left: calc(50% - 540px / 2);
  top: 342px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  color: #333333;
`;

export const Medias = styled.div`
  width: 1124px;
  height: 885px;
  position: absolute;
  left: calc(50% - 1124px / 2);
  bottom: 0;
  margin-bottom: 97px;
`;

export const Tablet = styled.div`
  position: absolute;
  width: 920px;
  height: 700px;
  left: 0;
  bottom: 40px;
  background-image: url('images/Free Version.png');
  box-shadow: 30px 30px 40px rgba(0, 0, 0, 0.1);
  border-radius: 45px;
`;

export const Phone = styled.div`
  position: absolute;
  width: 303px;
  height: 600px;
  bottom: 0;
  right: 0;
  background-image: url('images/today.png');
  box-shadow: 30px 30px 40px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
`;
