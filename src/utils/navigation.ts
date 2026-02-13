import { useNavigate } from "react-router";
import { useHeaderDropdownStatusStore } from "../stores/headerStores";
import { useSignPageToggleStore } from "../stores/SignStores";

const useGoTo = () => {
  const nav = useNavigate();
  const { setPageLogin, setPageSignUp } = useSignPageToggleStore();
  const { reset } = useHeaderDropdownStatusStore();

  const goTo = (where: "sign" | "login" | "board" | "home") => {
    if (where == "sign" || where == "login") {
      where == "sign" ? setPageSignUp() : setPageLogin();
      nav("/sign");
    } else if (where == "board") {
      nav("/user/board");
    } else {
      nav("/");
    }
    reset();
  };

  return goTo;
};

export default useGoTo;
