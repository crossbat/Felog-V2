export type TVerificateToggle = {
  status?: boolean;
  setStatusChange: () => void;
};

export type TSignPageToggle = {
  setPageStatusChange: () => void;
  setStatusChange?: () => void;
};
