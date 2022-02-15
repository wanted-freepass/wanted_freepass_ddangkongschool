import styled from 'styled-components';

export const Container = styled.section`
  ${props => props.theme.flex()};
  width: 100%;
  height: 647px;
`;

export const ContentWrap = styled.div`
  ${props => props.theme.flex('center', 'space-between')};
  max-width: 1140px;
  margin: 0 auto;
`;

export const TextWrap = styled.article`
  /* margin-right: 50px; */
`;

export const Title = styled.h1`
  margin: 50px 0;
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontLarge};
  line-height: 70px;
`;

export const Text = styled.p`
  font-weight: ${props => props.theme.weightRegular};
  font-size: ${props => props.theme.fontSemiMedium};
  line-height: 40px;
`;

export const VideoContainer = styled.div`
  width: 788px;
  height: 566px;
`;
