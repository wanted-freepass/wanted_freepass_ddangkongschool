import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  height: 299px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 1140px;
  height: 299px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  width: 50%;
`;

export const Logo = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Info = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: grey;
  display: inline-block;
`;

export const Right = styled.ul`
  // width: 50%;
`;

export const List = styled.li`
  font-size: 16px;
  display: inline-block;
  line-height: 28px;
  margin-right: 20px;
`;

export const Icons = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  border-radius: 50%;
  border: 1.5px solid #eeeeee;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 20px 0 0;
`;

export const Img = styled.img`
  width: 50%;
`;
