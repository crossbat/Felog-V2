import tw from "tailwind-styled-components";

const BasicInput = tw.input`
  focus:outline-0
`;

export const SignInputSize = tw.input`
  w-full
  max-w-[450px]
  h-[60px]
  border-b-3
  border-b-[#8c8a8a]
  indent-3
  text-[18px]
  !outline-none
`;

export const NoteTitleInput = tw(BasicInput)`
  w-1/2
  p-1
  indent-1
  focus:border-b-gray-400
  border-b-2
  border-gray-200
  transition-colors
  duration-300
`;
