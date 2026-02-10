import { EmptySpace } from "../../layouts/mainLayout/layoutStyles";
import { MediumFont, SmallFont, TitleFont } from "../../styles/commomTextStyles";
import { FlexCol, FlexColFullDiv, FlexRow, FullSizeDiv } from "../../styles/commonDivStyles";

const DashboardPage = () => {
  return (
    <FlexColFullDiv>
      <EmptySpace />
      <FlexRow className="gap-5">
        <div className="aspect-square bg-amber-600 min-h-40" />
        <FlexCol className="text-gray-400 justify-center">
          <MediumFont className="font-bold">최근에 열어 본 노트가 없어요</MediumFont>
          <SmallFont>새노트에 오늘을 기록해보세요</SmallFont>
        </FlexCol>
      </FlexRow>
    </FlexColFullDiv>
  );
};

export default DashboardPage;
