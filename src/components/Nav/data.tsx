interface Logo {
  SRC: string;
  WIDTH: string;
  HEIGHT: string;
  ALT: string;
}

export const LIST_DATA = [
  {
    id: 0,
    text: '도서구매',
  },
  {
    id: 1,
    text: '장바구니',
  },
  {
    id: 2,
    text: '|',
  },
  {
    id: 3,
    text: '이용권 관리',
  },
  {
    id: 4,
    text: '로그인/회원가입',
  },
];

export const LOGO: Logo = {
  SRC: '/images/logo.png',
  WIDTH: '154',
  HEIGHT: '50',
  ALT: 'logo',
};

export const MENU: Logo = {
  SRC: '/images/menu.png',
  WIDTH: '25',
  HEIGHT: '25',
  ALT: 'menu',
};

export const CART: Logo = {
  SRC: '/images/cart.png',
  WIDTH: '25',
  HEIGHT: '25',
  ALT: 'cart',
};
