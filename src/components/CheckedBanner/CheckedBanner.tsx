import * as S from './CheckedBanner.style';
import { BOOK_DATA, CHECKED_PHOTO, BOOK_PHOTO } from './data';
import { useResize } from '../../hooks/useResize';

const CheckedBanner = () => {
  const windowDimensions = useResize();
  const width: number | null = windowDimensions.width;
  const resizeWindowX: JSX.Element | null = width! >= 1200 ? <br /> : null;

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
                  <S.Image
                    src={CHECKED_PHOTO.SRC}
                    alt={CHECKED_PHOTO.ALT}
                    width={CHECKED_PHOTO.WIDTH}
                    height={CHECKED_PHOTO.HEIGHT}
                  />
                </S.CheckedWrap>
                <S.Image
                  src={data.src}
                  alt={data.alt}
                  width={BOOK_PHOTO.WIDTH}
                  height={BOOK_PHOTO.HEIGHT}
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
