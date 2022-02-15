import Image from 'next/image';
import * as S from './Nav.style';
import { LIST_DATA } from './data';
import Link from 'next/link';

const Nav = () => {
  return (
    <S.Nav>
      <S.NavWrap>
        <S.LogoWrap>
          <Image src="/images/logo.png" width="154" height="50" alt="logo" />
        </S.LogoWrap>
        <S.MenuList>
          {LIST_DATA.map(data => {
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
