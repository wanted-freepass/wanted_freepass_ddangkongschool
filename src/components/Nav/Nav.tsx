import Image from 'next/image';
import * as S from './Nav.style';
import { LIST_DATA, LOGO, MENU, CART } from './data';
import Link from 'next/link';
import { useResize } from '../../hooks/useResize';

const Nav = () => {
  const windowDimensions = useResize();
  const width: number | null = windowDimensions.width;
  const resizeWindowX: JSX.Element | null = width! >= 1200 ? <br /> : null;

  return (
    <S.Nav>
      <S.NavWrap>
        <S.LogoWrap>
          <Image
            src={LOGO.SRC}
            width={LOGO.WIDTH}
            height={LOGO.HEIGHT}
            alt={LOGO.ALT}
          />
        </S.LogoWrap>
        {resizeWindowX ? (
          <S.MenuList>
            {LIST_DATA.map((data: { id: number; text: string }) => {
              return (
                <S.Menu key={data.id}>
                  <Link href="/">
                    <a style={{ color: '#fff' }}>{data.text}</a>
                  </Link>
                </S.Menu>
              );
            })}
          </S.MenuList>
        ) : (
          <S.MenuList>
            <S.Menu>
              <Image
                src={CART.SRC}
                width={CART.WIDTH}
                height={CART.HEIGHT}
                alt={CART.ALT}
              />
            </S.Menu>
            <S.Menu>
              <Image
                src={MENU.SRC}
                width={MENU.WIDTH}
                height={MENU.HEIGHT}
                alt={MENU.ALT}
              />
            </S.Menu>
          </S.MenuList>
        )}
      </S.NavWrap>
    </S.Nav>
  );
};

export default Nav;
