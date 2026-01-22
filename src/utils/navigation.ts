import { useNavigate } from "react-router";
import { useHeaderDropdownStatusStore } from "../stores/headerStores";
import { useSignPageToggleStore } from "../stores/SignStores";

const useGoTo = () => {
  const nav = useNavigate();
  const { setPageLogin, setPageSignUp } = useSignPageToggleStore();
  const { reset } = useHeaderDropdownStatusStore();

  const goTo = (where: "sign" | "login" | "board") => {
    if (where == "sign" || where == "login") {
      where == "sign" ? setPageSignUp() : setPageLogin();
      nav("/sign");
    } else {
      nav("/user/board");
    }
    reset();
  };

  return goTo;
};

export default useGoTo;
