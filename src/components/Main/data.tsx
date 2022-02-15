interface YellowObject {
  SRC: string;
  WIDTH: string;
  HEIGHT: string;
  ALT: string;
}

interface MainImage {
  SRC: string;
  ALT: string;
}

export const LINE: YellowObject = {
  SRC: '/images/line.png',
  WIDTH: '220',
  HEIGHT: '11',
  ALT: 'line',
};

export const STAR: YellowObject = {
  SRC: '/images/star.png',
  WIDTH: '48',
  HEIGHT: '48',
  ALT: 'star',
};

export const MOUSE: YellowObject = {
  SRC: '/images/mouse.png',
  WIDTH: '48',
  HEIGHT: '48',
  ALT: 'mouse',
};

export const MAIN_IMAGE_BG: MainImage = {
  SRC: '/images/main_bg.png',
  ALT: 'main_bg',
};

export const MAIN_IMAGE: MainImage = {
  SRC: '/images/main.png',
  ALT: 'main',
};
