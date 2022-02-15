import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  padding: 25px 0;
  z-index: 999;
`;

export const NavWrap = styled.div`
  margin: 0 auto;
  ${props => props.theme.flex('center', 'space-between')};
  width: 100%;
  max-width: 1140px;
`;

export const LogoWrap = styled.div`
  width: 100%;
`;

export const MenuList = styled.ul`
  ${props => props.theme.flex('center', 'center')};
  width: 100%;
`;

export const Menu = styled.li`
  margin-left: 50px;
  font-size: ${props => props.theme.fontSmall};
`;
