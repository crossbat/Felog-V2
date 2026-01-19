import { FlexColFullDiv } from "../../styles/commonDivStyles";
import HeroSection from "./sections/heroSection";
import ImageSection from "./sections/imageSection";

const LandingPage = () => {
  return (
    <FlexColFullDiv>
      <HeroSection />
      <ImageSection />
    </FlexColFullDiv>
  );
};

export default LandingPage;
