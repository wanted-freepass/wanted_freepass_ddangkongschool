import React from 'react';
import Carousel from '../Carousel/carousel';
import TitleLayout from '../TitleLayout/TitleLayout';
import TextLayout from '../TextLayout/TextLayout';
import styled from 'styled-components';

function FeaturePage() {
  return (
    <PageWrap>
      <TitleLayout>땅콩스쿨만의 특징</TitleLayout>
      <CardWrapper>
        <CardLeft>
          <CardIcon src="/images/videoclass.svg" />
          <CardContentWrap>
            <CardTitle>화상수업</CardTitle>
            <CardText>
              휴대폰이나 태블릿으로 시간이나 장소 관계없이 편하게 수업을
              들어보세요
            </CardText>
          </CardContentWrap>
        </CardLeft>
        <CardCenter>
          <CardIcon src="/images/bidirectional.svg" />
          <CardContentWrap>
            <CardTitle>양방향</CardTitle>
            <CardText>
              화면에 그림도 그려보고, 읽은 책으로 선생님과 퀴즈도 풀어보는
              양방향 수업을 경험해보세요.
            </CardText>
          </CardContentWrap>
        </CardCenter>
        <CardRight>
          <CardIcon src="/images/character.svg" />
          <CardContentWrap>
            <CardTitle>캐릭터</CardTitle>
            <CardText>
              친숙한 캐릭터와 목소리로 수업에 대한 부담을 낮춰보세요.
            </CardText>
          </CardContentWrap>
        </CardRight>
      </CardWrapper>
    </PageWrap>
  );
}

export default FeaturePage;

const PageWrap = styled.div`
  background-color: rgb(249, 249, 249);
`;

const CardWrapper = styled.div`
  overflow-x: hidden;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  margin-top: 80px;

  @media ${({ theme }) => theme.laptop} {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }

  @media ${({ theme }) => theme.tablet} {
  }
`;

const CardLeft = styled.div`
  width: 390px;
  height: 651px;
  margin: 15px;
  position: relative;
  background-size: 460px 651px;
  background-image: url('/images/cardLeft.png');
  background-position: center center;
  background-repeat: no-repeat;

  @media ${({ theme }) => theme.laptop} {
    width: 580px;
    height: 609px;
    background-size: 580px 609px;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 360px;
    height: 458px;
    background-size: 360px 458px;
  }
`;

const CardCenter = styled.div`
  width: 390px;
  height: 651px;
  margin: 15px;
  position: relative;
  background-size: 460px 651px;
  background-image: url('/images/cardCenter.png');
  background-position: center center;
  background-repeat: no-repeat;

  @media ${({ theme }) => theme.laptop} {
    width: 580px;
    height: 609px;
    background-size: 580px 609px;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 360px;
    height: 458px;
    background-size: 360px 458px;
  }
`;

const CardRight = styled.div`
  width: 390px;
  height: 651px;
  margin: 15px;
  position: relative;
  background-size: 460px 651px;
  background-image: url('/images/cardRight.png');
  background-position: center center;
  background-repeat: no-repeat;

  @media ${({ theme }) => theme.laptop} {
    width: 580px;
    height: 609px;
    background-size: 580px 609px;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 360px;
    height: 458px;
    background-size: 360px 458px;
  }
`;

const CardIcon = styled.img`
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;

  @media ${({ theme }) => theme.tablet} {
    top: 121px;
    width: 80px;
  }
`;

const CardContentWrap = styled.div`
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 40px;
  text-align: center;

  @media ${({ theme }) => theme.tablet} {
    top: 200px;
  }
`;

const CardTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: rgb(51, 51, 51);

  @media ${({ theme }) => theme.tablet} {
    font-size: 20px;
  }
`;

const CardText = styled.div`
  margin-top: 30px;
  font-size: 20px;
  line-height: 1.8;
  white-space: pre-wrap;

  @media ${({ theme }) => theme.tablet} {
    font-size: 14px;
  }
`;
