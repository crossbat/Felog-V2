import { MediumFont, TitleFont } from "../../styles/commomTextStyles";
import {
  BannerImage,
  BlueATag,
  LandingGrowDiv,
  LandingMainDiv,
} from "./landingPageStyles";

const title = "Lorem Ipsum";
const content =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const LandingPage = () => {
  return (
    <LandingMainDiv>
      <LandingGrowDiv>
        <TitleFont>{title}</TitleFont>
        <MediumFont>{content}</MediumFont>
        <BlueATag href="#">More about Felog</BlueATag>
      </LandingGrowDiv>
      <LandingGrowDiv>
        <BannerImage src="../../../assets/MainPageImage.png" />
      </LandingGrowDiv>
    </LandingMainDiv>
  );
};

export default LandingPage;
