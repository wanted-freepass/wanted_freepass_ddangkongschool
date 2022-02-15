import * as S from './Downloads.style';

const Downloads = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>지금 다운로드 받으세요!</S.Title>
        <S.Coupon>
          <S.Left>
            <S.Logo src="/images/logo.png" />
            <S.Subject>
              책을 보는 <br />
              새로운 방법
            </S.Subject>
            <S.Description>
              지금 가입하시면 매주 8권의 동화책을 보실 수 있어요!
            </S.Description>
          </S.Left>

          <S.Right>
            <S.Bubble>회원가입에 걸리는 시간 단 3초</S.Bubble>
            <S.Button>
              <S.Icons src="/images/downloads/download.png" />
              <S.BtnTitle>앱 다운로드 하기</S.BtnTitle>
            </S.Button>
          </S.Right>
        </S.Coupon>
      </S.Container>
    </S.Wrapper>
  );
};

export default Downloads;
