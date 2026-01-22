import { BsArrowRight } from "react-icons/bs";
import { MoveToDiaryImage, MoveToDiaryText } from "../../headerStyles";
import { TitleFont } from "../../../../styles/commomTextStyles";
import useGoTo from "../../../../utils/navigation";

const DropdownRightSide = () => {
  const goTo = useGoTo();
  return (
    <>
      <MoveToDiaryText>
        <BsArrowRight className="max-h-8 max-w-8 w-full h-full" />
        <TitleFont>To Diary</TitleFont>
      </MoveToDiaryText>
      <MoveToDiaryImage
        onClick={() => goTo("board")}
        src="../../../assets/MainPageImage.png"
      />
    </>
  );
};

export default DropdownRightSide;
