import tw from "tailwind-styled-components";
import { FlexCol, FlexRow } from "../../styles/commonDivStyles";

interface IDropDownStatus {
  $opened: boolean;
}

export const HeaderMain = tw(FlexCol)`
  w-full
  items-center
  fixed
  top-0
  z-1000
  ease-in-out
  duration-1000
  sm:px-5
  xl:px-0
`;

export const LogoImage = tw.img<IDropDownStatus>`
  h-full
  ${(p) => (p.$opened ? "invert" : "")}
  ease-in-out
  duration-500
`;

export const MenuImage = tw.img<IDropDownStatus>`
  h-1/2
  ${(p) => (p.$opened ? "invert" : "")}
  ease-in-out
  duration-500
`;

export const HeaderInnerDiv = tw(FlexRow)`
  max-w-6xl
  w-full
  h-[50px]
  justify-between
  mt-[10px]
`;
