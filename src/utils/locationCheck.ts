import { useLocation } from "react-router";

export const locationCheck = (targetLocation: string) => {
  const { pathname } = useLocation();
  const locationState = pathname.includes(targetLocation);

  return locationState;
};
