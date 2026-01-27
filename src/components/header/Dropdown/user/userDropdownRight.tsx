import { SmallFont } from "../../../../styles/commomTextStyles";
import { FlexRow, FullSizeDiv } from "../../../../styles/commonDivStyles";
import { IoArrowForwardSharp } from "react-icons/io5";
import {
  ContentFlexBox,
  ContentTextBox,
  EachContentFlexBox,
  TempMenuImageBox,
} from "../../headerStyles";

const UserDropdownRight = () => {
  return (
    <>
      <ContentFlexBox>
        <EachContentFlexBox>
          <TempMenuImageBox />
          <ContentTextBox>
            <FlexRow className="justify-between w-full min-w-[250px]">
              <SmallFont>이동하기</SmallFont>
              <IoArrowForwardSharp />
            </FlexRow>
            <SmallFont>지금까지 작성한 일기</SmallFont>
          </ContentTextBox>
        </EachContentFlexBox>
        <EachContentFlexBox>
          <TempMenuImageBox />
          <ContentTextBox>
            <FlexRow className="justify-between w-full min-w-[250px]">
              <SmallFont>이동하기</SmallFont>
              <IoArrowForwardSharp />
            </FlexRow>
            <SmallFont>지금까지 작성한 일기</SmallFont>
          </ContentTextBox>
        </EachContentFlexBox>
        <EachContentFlexBox>
          <TempMenuImageBox />
          <ContentTextBox>
            <FlexRow className="justify-between w-full min-w-[250px]">
              <SmallFont>이동하기</SmallFont>
              <IoArrowForwardSharp />
            </FlexRow>
            <SmallFont>지금까지 작성한 일기</SmallFont>
          </ContentTextBox>
        </EachContentFlexBox>
      </ContentFlexBox>
    </>
  );
};

export default UserDropdownRight;
