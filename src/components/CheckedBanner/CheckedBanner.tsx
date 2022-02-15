import * as S from './CheckedBanner.style';

const CheckedBanner = () => {
  return (
    <S.Container>
      <S.ContentWrap>
        <S.TextWrap>
          <S.Title>
            교육 전문가들이
            <br />
            선정한 도서
          </S.Title>
          <S.Text>
            호두랩스의 교육 전문가들이
            <br /> 교과 수록, 초등 필독 도서 등<br />
            아동 교육에 적합한 도서를
            <br />
            직접 선정해요!
          </S.Text>
        </S.TextWrap>
        <S.VideoContainer />
      </S.ContentWrap>
    </S.Container>
  );
};

export default CheckedBanner;
