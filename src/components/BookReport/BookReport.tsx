import React from 'react';
import * as S from './BookReport.style';
import TitleLayout from '../TitleLayout/TitleLayout';
import TextLayout from '../TextLayout/TextLayout';

export default function BookReport() {
  return (
    <S.PageWrap>
      <TitleLayout>
        매일 매일
        <br />
        알아서 기록하는 독서 일기
      </TitleLayout>
      <TextLayout>
        오늘 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지
        <br /> 독서일기를 통해 확인해보세요. 읽기만 해도 자동으로 기록되고,
        공유도 가능해요.
      </TextLayout>
      <S.ReportImgWrapper>
        <S.ReportLeftWrap>
          <S.ReportCardImg src="/images/reportGreen.svg" />
          <S.ReportCardImg src="/images/reportWhite.svg" />
        </S.ReportLeftWrap>
        <S.ReportCenterWrap>
          <S.ReportCardImg src="/images/reportPhone.svg" />
        </S.ReportCenterWrap>
        <S.ReportRightWrap>
          <S.ReportCardImg src="/images/reportBlack.svg" />
          <S.ReportCardImg src="/images/reportCard.svg" />
        </S.ReportRightWrap>
      </S.ReportImgWrapper>
    </S.PageWrap>
  );
}
