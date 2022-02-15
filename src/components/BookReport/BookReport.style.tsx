import styled from 'styled-components';

export const PageWrap = styled.div`
  background: ${({ theme }) => theme.lightGray};
`;

export const ReportImgWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  padding-bottom: 150px;

  @media ${({ theme }) => theme.laptop} {
    flex-direction: column;
    justify-content: center;
    margin-top: 80px;
    padding-bottom: 100px;
  }

  @media ${({ theme }) => theme.tablet} {
    flex-direction: column;
    margin-top: 50px;
    padding-bottom: 80px;
  }
`;

export const ReportLeftWrap = styled.div`
  width: 368px;
  margin-right: 50px;

  @media ${({ theme }) => theme.laptop} {
    margin-right: 0;
  }

  @media ${({ theme }) => theme.tablet} {
    display: none;
  }
`;

export const ReportCenterWrap = styled.div``;

export const ReportRightWrap = styled.div`
  width: 368px;
  margin-left: 50px;

  @media ${({ theme }) => theme.laptop} {
    display: none;
  }

  @media ${({ theme }) => theme.tablet} {
    display: none;
  }
`;

export const ReportCardImg = styled.img`
  margin: 25px 0;
`;
