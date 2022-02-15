import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Left>
          <S.Logo>(주)호두랩스</S.Logo>
          <S.Info>대표: 김민우 | 사업자등록번호 : 431-88-01287</S.Info>
          <S.Info>
            서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)
          </S.Info>
          <S.Info>제주특별시 서귀포시 중정로 86, 304</S.Info>
          <S.Info>통신판매업 신고번호 : 2019-서울강남-00301호</S.Info>
          <br />
          <br />
          <S.Info>© Hodoo Labs. ALL RIGHTS RESERVED</S.Info>
        </S.Left>
        <S.Right>
          <S.List>고객센터</S.List>
          <S.List>채팅상담</S.List>
          <br />
          <S.List>이용약관</S.List>
          <S.List>개인정보 처리방침</S.List>
          <S.List>환불정책</S.List>
        </S.Right>
      </S.Container>
    </S.Wrapper>
  );
};

export default Footer;
