import tw from "tailwind-styled-components";

interface ITextOpts {
  $bold?: boolean;
}

export const ExtraSmallFont = tw.p`
  text-[12px]
`;

export const SmallFont = tw.p<ITextOpts>`
  text-[18px]
  ${(p) => (p.$bold ? "font-bold" : "")}
`;

export const MediumFont = tw.p<ITextOpts>`
  text-[24px]
  ${(p) => (p.$bold ? "font-bold" : "")}
`;

export const LargeFont = tw.p<ITextOpts>`
  text-[36px]
  ${(p) => (p.$bold ? "font-bold" : "")}
`;

export const TitleFont = tw.p`
  text-[36px]
  font-bold
`;

export const HeroFont = tw.p`
  text-[42px]
  font-bold
`;
