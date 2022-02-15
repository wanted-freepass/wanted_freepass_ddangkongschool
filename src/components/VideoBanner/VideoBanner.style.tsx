import styled from 'styled-components';
import bg from '../../assets/images/line_background.png';
import ipad from '../../assets/images/ipad.png';

export const Container = styled.section`
  ${props => props.theme.flex()};
  width: 100%;
  height: 873px;
  background-image: url('${bg.src}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContentWrap = styled.div`
  ${props => props.theme.flex('center', 'space-between')};
  max-width: 1140px;
  margin: 0 auto;
`;

export const TextWrap = styled.article`
  margin-right: 50px;
`;

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

export const VideoContainer = styled.div`
  width: 788px;
  height: 650px;
`;

export const Ipad = styled.article`
  width: 871px;
  height: 702px;
  margin-left: 60px;
  background-image: url('${ipad.src}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const VideoWrap = styled.div`
  position: relative;
`;

export const Video = styled.video.attrs({
  type: 'video/mp4',
})`
  position: absolute;
  bottom: 97px;
  left: 80px;
  width: 763px;
  border-radius: 15px;
`;
