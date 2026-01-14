import { TitleFont } from "../../styles/commomTextStyles";
import {
  FlexColFullDiv,
  FlexGrowRowDiv,
  FlexRowFullDiv,
} from "../../styles/commonDivStyles";

const DashboardPage = () => {
  return (
    <FlexRowFullDiv className="justify-center items-center">
      <div className="flex flex-col w-[calc(100%-300px)] h-full py-[100px] gap-[30px]">
        <TitleFont>반갑습니다 Lorem Ipsum님</TitleFont>
        <FlexColFullDiv className="gap-[30px]">
          <FlexRowFullDiv className="gap-[30px]">
            <FlexGrowRowDiv className="bg-amber-100"></FlexGrowRowDiv>
            <FlexGrowRowDiv className="bg-amber-100"></FlexGrowRowDiv>
          </FlexRowFullDiv>
          <FlexRowFullDiv className="gap-[30px]">
            <FlexGrowRowDiv className="bg-amber-100"></FlexGrowRowDiv>
            <FlexGrowRowDiv className="bg-amber-100"></FlexGrowRowDiv>
          </FlexRowFullDiv>
        </FlexColFullDiv>
      </div>
    </FlexRowFullDiv>
  );
};

export default DashboardPage;
