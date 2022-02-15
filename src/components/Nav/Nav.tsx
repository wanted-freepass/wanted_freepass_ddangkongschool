import Image from 'next/image';
import * as S from './Nav.style';
import { LIST_DATA } from './data';
import Link from 'next/link';
import { useResize } from '../../hooks/useResize';


const Nav = () => {
  const LOGO = {
    SRC: '/images/logo.png',
    WIDTH: '154',
    HEIGHT: '50',
    ALT: 'logo',
  };

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
      </S.NavWrap>
    </S.Nav>
  );
};

export default Nav;
