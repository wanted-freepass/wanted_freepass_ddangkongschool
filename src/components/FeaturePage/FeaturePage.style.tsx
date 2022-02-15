import styled from 'styled-components';

export const PageWrap = styled.div`
  background-color: rgb(249, 249, 249);
`;

export const CardWrapper = styled.div`
  overflow-x: hidden;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  margin-top: 80px;

  @media ${({ theme }) => theme.laptop} {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }

  @media ${({ theme }) => theme.tablet} {
  }
`;

export const CardLeft = styled.div`
  width: 390px;
  height: 651px;
  margin: 15px;
  position: relative;
  background-size: 460px 651px;
  background-image: url('/images/cardLeft.png');
  background-position: center center;
  background-repeat: no-repeat;

  @media ${({ theme }) => theme.laptop} {
    width: 580px;
    height: 609px;
    background-size: 580px 609px;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 360px;
    height: 458px;
    background-size: 360px 458px;
  }
`;

export const CardCenter = styled.div`
  width: 390px;
  height: 651px;
  margin: 15px;
  position: relative;
  background-size: 460px 651px;
  background-image: url('/images/cardCenter.png');
  background-position: center center;
  background-repeat: no-repeat;

  @media ${({ theme }) => theme.laptop} {
    width: 580px;
    height: 609px;
    background-size: 580px 609px;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 360px;
    height: 458px;
    background-size: 360px 458px;
  }
`;

export const CardRight = styled.div`
  width: 390px;
  height: 651px;
  margin: 15px;
  position: relative;
  background-size: 460px 651px;
  background-image: url('/images/cardRight.png');
  background-position: center center;
  background-repeat: no-repeat;

  @media ${({ theme }) => theme.laptop} {
    width: 580px;
    height: 609px;
    background-size: 580px 609px;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 360px;
    height: 458px;
    background-size: 360px 458px;
  }
`;

export const CardIcon = styled.img`
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;

  @media ${({ theme }) => theme.tablet} {
    top: 121px;
    width: 80px;
  }
`;

export const CardContentWrap = styled.div`
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 40px;
  text-align: center;

  @media ${({ theme }) => theme.tablet} {
    top: 200px;
  }
`;

export const CardTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: rgb(51, 51, 51);

  @media ${({ theme }) => theme.tablet} {
    font-size: 20px;
  }
`;

export const CardText = styled.div`
  margin-top: 30px;
  font-size: 20px;
  line-height: 1.8;
  white-space: pre-wrap;

  @media ${({ theme }) => theme.tablet} {
    font-size: 14px;
  }
`;
