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

export const FlexRow = tw.div`
  flex
`;

export const FlexCol = tw.div`
  flex
  flex-col
`;

export const FlexRowFullDiv = tw(FullSizeDiv)`
  flex
  flex-row
`;

export const FlexColFullDiv = tw(FullSizeDiv)`
  flex
  flex-col
`;

export const FlexRowScnDiv = tw(FullScreenDiv)`
  flex
  flex-row
`;

export const FlexColScnDiv = tw(FullScreenDiv)`
  flex
  flex-col
`;

interface FlexGrowProps {
  $grow?: string;
}

export const FlexGrowRowDiv = tw(FullSizeDiv)<FlexGrowProps>`
  flex
  flex-row
  ${(p) => `grow-${p.$grow}`}
`;

export const FlexGrowColDiv = tw(FullSizeDiv)`
  flex
  flex-col
  ${(p) => `grow-${p.$grow}`}
`;

//grid

interface gridTemplateProps {
  $width: string;
  $height: string;
}

export const GridFullTemplate = tw(FullSizeDiv)<gridTemplateProps>`
  ${(p) => `grid-cols-${p.$width} grid-rows-${p.$height}`}
  grid
`;
