import React from 'react';
import * as S from './TextLayout.style';

export default function TextLayout({ children }: any): JSX.Element {
  return <S.Description>{children}</S.Description>;
}
