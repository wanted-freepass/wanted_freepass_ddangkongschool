import React from 'react';
import Carousel from '../Carousel/carousel';
import TitleLayout from '../TitleLayout/TitleLayout';
import TextLayout from '../TextLayout/TextLayout';
import styled from 'styled-components';

function BooksCarouselPage() {
  return (
    <PageWrap>
      <TitleLayout>
        입학 전 1000권 읽기! <br />
        땅콩스쿨로 도전해보세요.
      </TitleLayout>
      <TextLayout>
        매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요. <br />
        독서를 통해 배움의 즐거움을 알아가 보세요.
      </TextLayout>
      <Carousel />
    </PageWrap>
  );
}

export default BooksCarouselPage;

const PageWrap = styled.div``;
