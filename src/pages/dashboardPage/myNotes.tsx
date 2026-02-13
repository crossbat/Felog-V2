import { MediumFont, SmallFont } from "../../styles/commomTextStyles";
import { FlexCol, FlexRow, FlexRowFullDiv } from "../../styles/commonDivStyles";

const MyNotes = () => {
  return (
    <FlexCol $gap={5}>
      <MediumFont $bold={true}>내 노트</MediumFont>
      <div className="grid grid-rows-2 grid-cols-4 gap-10 p-3">
        <FlexRow className="justify-center items-center h-90">
          <FlexRowFullDiv className="justify-center items-center bg-gray-200 rounded-2xl shadow-lg">
            <div className="opacity-50">
              <SmallFont>2월 노트</SmallFont>
              <SmallFont>생성하기</SmallFont>
            </div>
          </FlexRowFullDiv>
        </FlexRow>
        <FlexRow className="justify-center items-center h-90">
          <FlexRowFullDiv className="justify-center items-center bg-amber-200 rounded-2xl shadow-lg">
            <div className="opacity-50">
              <SmallFont>1월 노트</SmallFont>
            </div>
          </FlexRowFullDiv>
        </FlexRow>
      </div>
    </FlexCol>
  );
};

export default MyNotes;
