import styled from 'styled-components';

export const Description = styled.div`
  text-align: center;
  padding-top: 50px;
  font-size: 24px;
  line-height: 1.67;
  white-space: pre-wrap;

  @media ${({ theme }) => theme.tablet} {
    font-size: 14px;
    padding-top: 30px;
  }
`;
