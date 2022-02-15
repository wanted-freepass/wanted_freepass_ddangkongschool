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

  @media ${({ theme }) => theme.laptop} {
    ${props => props.theme.flex('center', 'center', 'column')};
    height: 1042px;
    text-align: center;
  }

  @media ${({ theme }) => theme.tablet} {
    height: 630px;
    text-align: center;
    margin: 0 auto;
  }
`;

export const ContentWrap = styled.div`
  ${props => props.theme.flex('center', 'space-between')};
  max-width: 1140px;
  margin: 0 auto;

  @media ${({ theme }) => theme.laptop} {
    ${props => props.theme.flex('center', 'center', 'column')};
    margin-top: 100px;
  }

  @media ${({ theme }) => theme.tablet} {
  }
`;

export const TextWrap = styled.article`
  margin-right: 50px;

  @media ${({ theme }) => theme.laptop} {
    ${props => props.theme.flex('center', 'center', 'column')};
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  margin-bottom: 50px;
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontLarge};
  line-height: 70px;

  @media ${({ theme }) => theme.tablet} {
    font-weight: ${props => props.theme.weightBold};
    font-size: ${props => props.theme.fontMedium};
    line-height: 50px;
  }
`;

export const Text = styled.p`
  font-weight: ${props => props.theme.weightRegular};
  font-size: ${props => props.theme.fontSemiMedium};
  line-height: 40px;

  @media ${({ theme }) => theme.tablet} {
    font-weight: ${props => props.theme.weightRegular};
    font-size: ${props => props.theme.fontSmall};
    line-height: 26px;
  }
`;

export const VideoContainer = styled.div`
  width: 788px;
  height: 650px;

  @media ${({ theme }) => theme.laptop} {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }

  @media ${({ theme }) => theme.tablet} {
    height: 400px;
    width: 100%;
  }
`;

export const Ipad = styled.article`
  width: 871px;
  height: 702px;
  margin-left: 60px;
  background-image: url('${ipad.src}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${({ theme }) => theme.laptop} {
    width: 725px;
    height: 570px;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 380px;
    height: 288px;
    margin-left: 50px;
  }
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

  @media ${({ theme }) => theme.laptop} {
    bottom: 79px;
    left: 85px;
    width: 624px;
    height: 468px;
  }

  @media ${({ theme }) => theme.tablet} {
    bottom: 40px;
    left: 53px;
    width: 335px;
    height: 235px;
    border: 1px solid red;
  }
`;
