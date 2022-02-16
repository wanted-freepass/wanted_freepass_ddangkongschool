import styled from 'styled-components';

export const ReviewContainer = styled.div`
  position: relative;
  width: 100%;
  background: #f9f9f9;
`;

export const BackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 703px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/section13.png');
  background-position: center;
  background-size: cover;
  /* background: black;
  filter: opacity(0.7) drop-shadow(0 0 0 gray); */
`;

export const ImageBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 117px;
  height: 117px;
  background-color: #ffb100;
  border-radius: 50%;
  top: 159px;
`;
export const AroundImage = styled.img`
  width: 176px;
  height: 120px;
  left: 870px;
  position: absolute;
  top: 159px;
`;
export const AroundBox = styled.div`
  position: absolute;
  top: 159px;
`;

export const ImageTitle = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

export const ReviewId = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 284px;
  height: 24px;
  top: 306px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  opacity: 0.7;
`;
export const ReviewText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 848px;
  height: 173px;
  top: 380px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  color: #ffffff;
`;
export const Previousimg = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 13.56%;
  right: 5.56%;
  top: 45.56%;
  bottom: 5.56%;
`;
export const NextImg = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 82.44%;
  right: -83.33%;
  top: 45.56%;
  bottom: -83.33%;
`;
