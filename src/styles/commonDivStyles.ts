import tw from "tailwind-styled-components";

//div
export const FullScreenDiv = tw.div`
  w-screen
  h-screen
`;

export const FullSizeDiv = tw.div`
  w-full
  h-full
`;

interface filter {
  $blur: boolean;
}

export const PageBlurFilter = tw(FullScreenDiv) <filter>`
  backdrop-blur-sm
  absolute
  z-1000
  transition-all
  ease-in-out
  duration-1000
  ${(p) => (p.$blur ? "opacity-100" : "hidden opacity-0")}
`;

export const BasicNoteCover = tw.div`
  h-full
  aspect-2/3
`;

//flex
interface IDivOpts {
  $gap?: number;
  $grow?: string;
}

export const FlexRow = tw.div<IDivOpts>`
  flex
  ${(p) => `gap-${p.$gap}`}
`;

export const FlexCol = tw.div<IDivOpts>`
  flex
  flex-col
  ${(p) => `gap-${p.$gap}`}
`;

export const FlexRowFullDiv = tw(FullSizeDiv) <IDivOpts>`
  flex
  flex-row
  ${(p) => `gap-${p.$gap}`}
`;

export const FlexColFullDiv = tw(FullSizeDiv) <IDivOpts>`
  flex
  flex-col
  ${(p) => `gap-${p.$gap}`}
`;

export const FlexRowScnDiv = tw(FullScreenDiv) <IDivOpts>`
  flex
  flex-row
  ${(p) => `gap-${p.$gap}`}
`;

export const FlexColScnDiv = tw(FullScreenDiv) <IDivOpts>`
  flex
  flex-col
  ${(p) => `gap-${p.$gap}`}
`;

export const FlexGrowRowDiv = tw(FullSizeDiv) <IDivOpts>`
  flex
  flex-row
  ${(p) => `grow-${p.$grow}`}
  ${(p) => `gap-${p.$gap}`}
  
`;

export const FlexGrowColDiv = tw(FullSizeDiv) <IDivOpts>`
  flex
  flex-col
  ${(p) => `grow-${p.$grow}`}
  ${(p) => `grow-${p.$gap}`}
`;

//grid

interface gridTemplateProps {
  $width: number;
  $height: number;
  $gap: number;
}

export const GridFullTemplate = tw(FullSizeDiv) <gridTemplateProps>`
  grid
  ${(p) => `grid-rows-${p.width}`}
  ${(p) => `grid-cols-${p.height}`}
  ${(p) => `gap-${p.$gap}`}
`;
