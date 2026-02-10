import tw from "tailwind-styled-components";
import { FlexCol } from "../../styles/commonDivStyles";

interface IHeaderMenuStatus {
  $opened: boolean;
}

export const HeaderMenuDiv = tw(FlexCol) <IHeaderMenuStatus>`
  grid
  ${(p) => (p.$opened ? "w-[var(--sidebar-open-width)] grid-rows-[1fr]" : "w-[var(--sidebar-close-width)] grid-rows-[0fr]")}
  bg-[#0F0E0E]
  absolute
  z-999
  top-0
  right-1/2
  translate-x-1/2
  rounded-b-3xl
  ease-in-out
  duration-500
`;

export const EmptySpace = tw.div`
  min-h-[120px]
`;
