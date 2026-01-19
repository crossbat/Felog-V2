import tw from "tailwind-styled-components";
import { FlexCol } from "../../styles/commonDivStyles";

interface IHeaderMenuStatus {
  $opened: boolean;
}

export const HeaderMenuDiv = tw(FlexCol)<IHeaderMenuStatus>`
  ${(p) => (p.$opened ? "w-[var(--sidebar-open-width)] h-1/2" : "w-[var(--sidebar-close-width)] h-0")}
  bg-black
  absolute
  z-999
  top-0
  right-1/2
  translate-x-1/2
  rounded-b-3xl
  ease-in-out
  duration-500
`;
