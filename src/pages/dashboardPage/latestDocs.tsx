import { EmptySpace } from "../../layouts/mainLayout/layoutStyles";
import { MediumFont, SmallFont } from "../../styles/commomTextStyles";
import { FlexCol, FlexColFullDiv, FlexRow } from "../../styles/commonDivStyles";

const LatestDocs = () => {
  return (
    <FlexColFullDiv>
      <EmptySpace />
      <FlexCol $gap={10}>
        <MediumFont $bold={true}>최근 본 노트</MediumFont>
        <FlexRow $gap={5}>
          <div className="aspect-square max-h-30 opacity-30">
            <img src="../.../../../assets/document.png" />
          </div>
          <FlexCol className="text-gray-400 justify-center">
            <MediumFont className="font-bold">
              최근에 열어 본 노트가 없어요
            </MediumFont>
            <SmallFont>새노트에 오늘을 기록해보세요</SmallFont>
          </FlexCol>
        </FlexRow>
      </FlexCol>
      <EmptySpace />
    </FlexColFullDiv>
  );
};

export default LatestDocs;
