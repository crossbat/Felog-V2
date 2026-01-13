import tw from "tailwind-styled-components";

export const FullScreenDiv = tw.div`
  w-screen
  h-screen
`;

export const FullSizeDiv = tw.div`
  w-full
  h-full
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

export const FlexGrowDiv = tw(FullSizeDiv)`
  flex
  flex-row
  grow-1
`;
