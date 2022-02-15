import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 573px;
  background-color: ${props => props.theme.yellow};
`;

export const Wrap = styled.article`
  ${props => props.theme.flex('center', 'center', 'column')};
  height: 100%;
  text-align: center;
  color: ${props => props.theme.white};

  @media ${({ theme }) => theme.laptop} {
    margin-top: -30px;
    margin-bottom: -100px;
  }

  @media ${({ theme }) => theme.tablet} {
    margin-top: -120px;
  }
`;

export const Title = styled.h2`
  margin: 30px 0 50px 0;
  font-weight: 300;
  font-size: ${props => props.theme.fontLarge};

  @media ${({ theme }) => theme.tablet} {
    margin-top: 10px;
    font-weight: ${props => props.theme.weightRegular};
    font-size: ${props => props.theme.fontMedium};
  }
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSemiMedium};
  line-height: 40px;

  @media ${({ theme }) => theme.laptop} {
    font-size: ${props => props.theme.fontRegular};
  }

  @media ${({ theme }) => theme.tablet} {
    width: 80%;
    margin-bottom: -100px;
    font-size: ${props => props.theme.fontSmall};
    line-height: 30px;
  }
`;
