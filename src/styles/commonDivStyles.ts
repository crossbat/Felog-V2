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

export const FlexRowFullDiv = tw(FullSizeDiv)<IDivOpts>`
  flex
  flex-row
  ${(p) => `gap-${p.$gap}`}
`;

export const FlexColFullDiv = tw(FullSizeDiv)<IDivOpts>`
  flex
  flex-col
  ${(p) => `gap-${p.$gap}`}
`;

export const FlexRowScnDiv = tw(FullScreenDiv)<IDivOpts>`
  flex
  flex-row
  ${(p) => `gap-${p.$gap}`}
`;

export const FlexColScnDiv = tw(FullScreenDiv)<IDivOpts>`
  flex
  flex-col
  ${(p) => `gap-${p.$gap}`}
`;

export const FlexGrowRowDiv = tw(FullSizeDiv)<IDivOpts>`
  flex
  flex-row
  ${(p) => `grow-${p.$grow}`}
  ${(p) => `gap-${p.$gap}`}
  
`;

export const FlexGrowColDiv = tw(FullSizeDiv)<IDivOpts>`
  flex
  flex-col
  ${(p) => `grow-${p.$grow}`}
  ${(p) => `grow-${p.$gap}`}
`;

//grid

interface gridTemplateProps {
  $width: string;
  $height: string;
  $gap: number;
}

export const GridFullTemplate = tw(FullSizeDiv)<gridTemplateProps>`
  ${(p) => `grid-cols-${p.$width} grid-rows-${p.$height}`}
  grid
  ${(p) => `gap-${p.$gap}`}
`;
