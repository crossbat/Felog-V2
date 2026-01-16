import { TitleFont } from "../../styles/commomTextStyles";
import { GridFullTemplate } from "../../styles/commonDivStyles";

const DashboardPage = () => {
  return (
    <>
      <TitleFont>반갑습니다 Lorem Ipsum님</TitleFont>
      <GridFullTemplate
        $width="12"
        $height="4"
        className="bg-amber-100"
      ></GridFullTemplate>
    </>
  );
};

export default DashboardPage;
