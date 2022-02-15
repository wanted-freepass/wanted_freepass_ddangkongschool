import React from 'react';
import styled from 'styled-components';

export default function TextLayout({ children }): any {
  return <Description>{children}</Description>;
}

const Description = styled.div`
  text-align: center;
  padding-top: 50px;
  font-size: 24px;
  line-height: 1.67;
`;
