import { useNotePopupToggleStore } from "../../stores/dashboardStores";
import { MediumFont, SmallFont } from "../../styles/commomTextStyles";
import { BasicNoteCover, FlexCol, FlexRowFullDiv } from "../../styles/commonDivStyles";

const MyNotes = () => {
  const { isOpen, setPopupStateChange } = useNotePopupToggleStore()
  console.log(isOpen)
  return (
    <FlexCol $gap={5}>
      <MediumFont $bold={true}>내 노트</MediumFont>
      <div className="grid grid-rows-2 grid-cols-5 gap-10 p-3">
        <BasicNoteCover className="flex justify-center items-center cursor-pointer" onClick={() => setPopupStateChange()}>
          <FlexRowFullDiv className="justify-center items-center bg-gray-200 rounded-2xl shadow-lg">
            <div className="opacity-50">
              <SmallFont>2월 노트</SmallFont>
              <SmallFont>생성하기</SmallFont>
            </div>
          </FlexRowFullDiv>
        </BasicNoteCover>
        <BasicNoteCover className=" flex justify-center items-center">
          <FlexRowFullDiv className="justify-center items-center bg-amber-200 rounded-2xl shadow-lg">
            <div className="opacity-50">
              <SmallFont>1월 노트</SmallFont>
            </div>
          </FlexRowFullDiv>
        </BasicNoteCover>
      </div>
    </FlexCol>
  );
};

export default MyNotes;
