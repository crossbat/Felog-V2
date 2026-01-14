import tw from "tailwind-styled-components";
import { FlexGrowColDiv, FlexRowFullDiv } from "../../styles/commonDivStyles";

export const BlueATag = tw.a`
  text-[24px]
  text-[#327aff]
`;

export const BannerImage = tw.img`
  w-full
  h-full
  object-cover
  rounded-2xl
`;

export const LandingMainDiv = tw(FlexRowFullDiv)`
  py-[100px]
  px-[60px]
  justify-between
  gap-36
`;

export const LandingGrowDiv = tw(FlexGrowColDiv)`
  flex-1
  justify-center
  gap-10
  
`;
