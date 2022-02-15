import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  padding: 25px 0;
  z-index: 999;
`;

export const NavWrap = styled.div`
  ${props => props.theme.flex('center', 'space-between')};
  width: 100%;
  margin: 0 auto;
  max-width: 1140px;
`;

export const LogoWrap = styled.div`
  @media ${({ theme }) => theme.laptop} {
    margin-left: 20px;
  }

  @media ${({ theme }) => theme.tablet} {
  }
`;

export const MenuList = styled.ul`
  ${props => props.theme.flex('center', 'flex-end')};
  width: 100%;

  @media ${({ theme }) => theme.laptop} {
    margin-right: 20px;
  }
`;

export const Menu = styled.li`
  margin-left: 50px;
  font-size: ${props => props.theme.fontSmall};

  @media ${({ theme }) => theme.laptop} {
    margin-left: 20px;
  }
`;
