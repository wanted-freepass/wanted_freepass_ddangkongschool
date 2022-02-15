import Image from 'next/image';
import * as S from './CheckedBanner.style';
import { BOOK_DATA, CHECKED_IMAGE, BOOK_IMAGE } from './data';
import { useResize } from '../../hooks/useResize';

const CheckedBanner = () => {
  const windowDimensions = useResize();
  const resizeWindowX = windowDimensions.width >= 1200 ? <br /> : '';

  return (
    <S.Container>
      <S.ContentWrap>
        <S.TextWrap>
          <S.Title>교육 전문가들이 {resizeWindowX}선정한 도서</S.Title>
          <S.Text>
            호두랩스의 교육 전문가들이 {resizeWindowX}
            교과 수록, 초등 필독 도서 등<br />
            아동 교육에 적합한 도서를
            {resizeWindowX}
            직접 선정해요!
          </S.Text>
        </S.TextWrap>
        <S.CheckedContainer>
          {BOOK_DATA.map((data: { id: number; src: string; alt: string }) => {
            return (
              <S.BookWrap key={data.id}>
                <S.CheckedWrap>
                  <Image
                    src={CHECKED_IMAGE.SRC}
                    width={CHECKED_IMAGE.WIDTH}
                    height={CHECKED_IMAGE.HEIGHT}
                    alt={CHECKED_IMAGE.ALT}
                  />
                </S.CheckedWrap>
                <Image
                  src={data.src}
                  width={BOOK_IMAGE.WIDTH}
                  height={BOOK_IMAGE.HEIGHT}
                  alt={data.alt}
                />
              </S.BookWrap>
            );
          })}
        </S.CheckedContainer>
      </S.ContentWrap>
    </S.Container>
  );
};

export default CheckedBanner;
