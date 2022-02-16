import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 703px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0px;
  top: 0px;
  overflow: hidden;
`;

export const Container = styled.section`
  width: 848px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const LeftButton = styled.button`
  color: white;
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 1px solid white;
  position: absolute;
  top: 400px;
  left: -30px;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightButton = styled.button`
  color: white;
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 1px solid white;
  position: absolute;
  top: 400px;
  right: -30px;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform: translateX(-${({ currentSlide }) => currentSlide}00%);
`;

export const User = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  opacity: 0.7;
  z-index: 9;
`;

export const Review = styled.p`
  font-size: 20px;
  line-height: 36px;
  color: #ffffff;
  z-index: 9;
`;

export const Black = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.7;
  z-index: 1;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/images/image 22.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;
