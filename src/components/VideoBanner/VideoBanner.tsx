import * as S from './VideoBanner.style';

const VideoBanner = () => {
  return (
    <S.Container>
      <S.ContentWrap>
        <S.TextWrap>
          <S.Title>
            랜선 라이브
            <br />
            북클래스
          </S.Title>
          <S.Text>
            친구들과 함께
            <br /> 그림 그리기, 퀴즈 풀기.
            <br /> 선생님과 대화하며 경험해요!
          </S.Text>
        </S.TextWrap>
        <S.VideoContainer>
          <S.Ipad />
          <S.VideoWrap>
            <S.Video src="videos/main_video.mp4" loop autoPlay muted />
          </S.VideoWrap>
        </S.VideoContainer>
      </S.ContentWrap>
    </S.Container>
  );
};

export default VideoBanner;
