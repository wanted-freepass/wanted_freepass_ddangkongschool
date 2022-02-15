const theme = {
  black: '#333333',
  mediumGray: '#e5e5e5',
  lightGray: '#F9F9F9',
  white: '#ffffff',
  yellow: '#FFB100',

  fontExtraLarge: '60px',
  fontLarge: '50px',
  fontMedium: '30px',
  fontSemiMedium: '24px',
  fontRegular: '20px',
  fontSmall: '16px',
  fontMicro: '14px',

  weightBold: '700',
  weightSemiBold: '500',
  weightRegular: '400',

  borderRadius4: '4px',
  borderRadius12: '12px',

  borderGray: '1px solid #e8e8e8',
  borderBlack: '1px solid #000',

  marginCenter: '0 auto',

  flex: (align = 'center', justify = 'center', direction = 'row') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content:${justify};
    `,

  absoluteCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `,

  positionFixed: `
    position: fixed;
    top: 0;
    left: 0;
    z-index:999;
  `,

  mobile: `(max-width: 360px)`,
  mobileL: `(max-width: 480px)`,
  tablet: `(max-width: 768px)`,
  laptop: `(max-width: 1200px)`,
};

export default theme;
