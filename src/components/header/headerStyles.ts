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
  cursor-pointer
`;

export const HeaderInnerDiv = tw(FlexRow)`
  max-w-6xl
  w-full
  h-[50px]
  justify-between
  mt-[10px]
`;

//HeaderDropDown

export const HeaderDropDownMain = tw(FlexRow)<IDropDownStatus>`
  flex-1
  justify-between
  whitespace-nowrap
  py-5
  px-[var(--sidebar-padding)]
  w-full
  ${(p) => (p.$opened ? "opacity-100 duration-1200" : "opacity-0 duration-300")}
  ease-in-out
`;

//header-Left
export const HeaderDropDownLeft = tw(FlexCol)`
  gap-10
  w-fit
`;

export const HeaderDropDownHero = tw(FlexCol)`
  text-white
  gap-3
  w-fit
`;

export const HeaderButton = tw.button`
  py-4
  px-5
  cursor-pointer
`;

//header-Right
export const HeaderDropDownRight = tw(FlexRow)`
  max-h-80
  h-full
  gap-5
  rounded-2xl
  text-white
  justify-end
  group
  whitespace-nowrap
`;

export const MoveToDiaryText = tw(FlexCol)`
  max-w-fit
  w-0
  justify-end
  items-end
  group-hover:w-full
  overflow-hidden
  ease-in-out
  duration-1000
`;

export const MoveToDiaryImage = tw.img`
  max-w-64
  h-full
  rounded-2xl
  overflow-hidden
  border-white
  group-hover:border-l-8
  ease-in-out
  duration-500
  cursor-pointer
`;
