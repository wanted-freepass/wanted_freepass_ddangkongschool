import React from 'react';
import TitleLayout from '../TitleLayout/TitleLayout';
import * as S from './FeaturePage.style';
// import Fade from 'react-reveal/Fade';

function FeaturePage() {
  return (
    <S.PageWrap>
      {/* <Fade bottom> */}
      <TitleLayout>땅콩스쿨만의 특징</TitleLayout>
      {/* </Fade> */}
      {/* <Fade bottom cascade> */}
      <S.CardWrapper>
        <S.CardLeft>
          <S.CardIcon src="/images/videoclass.svg" />
          <S.CardContentWrap>
            <S.CardTitle>화상수업</S.CardTitle>
            <S.CardText>
              휴대폰이나 태블릿으로 시간이나 장소 관계없이 편하게 수업을
              들어보세요
            </S.CardText>
          </S.CardContentWrap>
        </S.CardLeft>
        <S.CardCenter>
          <S.CardIcon src="/images/bidirectional.svg" />
          <S.CardContentWrap>
            <S.CardTitle>양방향</S.CardTitle>
            <S.CardText>
              화면에 그림도 그려보고, 읽은 책으로 선생님과 퀴즈도 풀어보는
              양방향 수업을 경험해보세요.
            </S.CardText>
          </S.CardContentWrap>
        </S.CardCenter>
        <S.CardRight>
          <S.CardIcon src="/images/character.svg" />
          <S.CardContentWrap>
            <S.CardTitle>캐릭터</S.CardTitle>
            <S.CardText>
              친숙한 캐릭터와 목소리로 수업에 대한 부담을 낮춰보세요.
            </S.CardText>
          </S.CardContentWrap>
        </S.CardRight>
      </S.CardWrapper>
      {/* </Fade> */}
    </S.PageWrap>
  );
}

export default FeaturePage;
