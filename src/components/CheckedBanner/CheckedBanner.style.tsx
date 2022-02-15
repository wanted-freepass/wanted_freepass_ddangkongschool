import styled from 'styled-components';

export const Container = styled.section`
  ${props => props.theme.flex()};
  width: 100%;
  height: 647px;
  background-color: ${props => props.theme.lightGray};
`;

export const ContentWrap = styled.div`
  ${props => props.theme.flex('center', 'space-between')};
  max-width: 1140px;
  margin: 0 auto;
`;

export const TextWrap = styled.article``;

export const Title = styled.h1`
  margin-bottom: 50px;
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontLarge};
  line-height: 70px;
`;

export const Text = styled.p`
  font-weight: ${props => props.theme.weightRegular};
  font-size: ${props => props.theme.fontSemiMedium};
  line-height: 40px;
`;

export const CheckedContainer = styled.div`
  ${props => props.theme.flex('center', 'flex-end', 'row')};
  position: relative;
  right: -34px;
  width: 788px;
  height: 566px;
`;

export const BookContainer = styled.div`
  position: relative;
  ${props => props.theme.flex('space-between', 'center', 'column')};
`;

export const BookWrap = styled.div`
  margin-left: 50px;
  ${props => props.theme.flex('center', 'center', 'column')};
`;

export const CheckedWrap = styled.div`
  margin-bottom: 33px;
`;
