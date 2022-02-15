import * as S from './Downloads.style';

const Downloads = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>지금 다운로드 받으세요!</S.Title>
        <S.Punched>
          <S.BigCircle />
          <S.BigCircle />
        </S.Punched>
        <S.Coupon>
          <S.Left>
            <S.Logo>땅콩스쿨</S.Logo>
            <S.Subject>
              책을 보는 <br />
              새로운 방법
            </S.Subject>
            <S.Description>
              지금 가입하시면 매주 8권의 동화책을 보실 수 있어요!
            </S.Description>
          </S.Left>
          <S.Right>오른쪽</S.Right>
        </S.Coupon>
      </S.Container>
    </S.Wrapper>
  );
};

export default Downloads;
