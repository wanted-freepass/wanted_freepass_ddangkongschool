import React from 'react';
import * as S from './TitleLayout.style';

export default function TextLayout({ children }: any): JSX.Element {
  return <S.Title>{children}</S.Title>;
}
