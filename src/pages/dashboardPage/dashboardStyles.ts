import tw from "tailwind-styled-components";
import { BasicNoteCover, FlexCol, FlexRow } from "../../styles/commonDivStyles";

export const NotePopup = tw.div`
  fixed
  flex
  flex-col
  items-center
  gap-10
  bottom-0
  translate-y-0
  right-1/2
  translate-x-1/2
  z-1001
  w-[var(--notePopup-width)]
`;

export const NoteSettingContainer = tw(FlexRow)`
  w-full
  h-100
  bg-white
  rounded-t-4xl
  shadow-2xl
  gap-10
  py-15
  px-15
`;

export const NoteExampleDiv = tw(BasicNoteCover)`
  flex-1
  bg-gray-300
  w-auto
`;

export const NoteSettingDiv = tw(FlexCol)`
  h-full
  flex-3
  justify-between
`;
