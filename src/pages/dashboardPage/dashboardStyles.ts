import tw from "tailwind-styled-components";
import { BasicNoteCover, FlexCol, FlexRow } from "../../styles/commonDivStyles";

interface INotePopupState {
  $isOpen: boolean;
}

export const NotePopup = tw(FlexCol) <INotePopupState>`
  fixed
  justify-end
  items-center
  gap-10
  bottom-0
  right-1/2
  translate-x-1/2
  z-1001
  transition
  duration-500
  ease-in-out
  overflow-hidden
  w-[var(--notePopup-width)]
  max-h-fit
  ${(p) => p.$isOpen
    ? "translate-y-0 opacity-100"
    : "translate-y-full opacity-0"
  }
`;

export const NoteSettingContainer = tw(FlexRow)`
  w-full
  h-100
  bg-white
  rounded-4xl
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

export const PopupButtonDiv = tw(FlexRow)`
  justify-center
  items-center
  w-15
  h-auto
  aspect-square
  rounded-full
  bg-black
  cursor-pointer
`
