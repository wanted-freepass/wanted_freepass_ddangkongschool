import styled from 'styled-components';

export const Title = styled.h3`
  padding-top: 150px;
  font-size: 50px;
  font-weight: bold;
  line-height: 1.47;
  text-align: center;
  color: rgb(51, 51, 51);

  @media ${({ theme }) => theme.tablet} {
    font-size: 30px;
    padding-top: 100px;
  }
`;
