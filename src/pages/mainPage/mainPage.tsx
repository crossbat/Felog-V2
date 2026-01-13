import { MediumFont, TitleFont } from "../../styles/commomTextStyles";
import { BlueATag } from "./mainPageStyles";

const title = "Lorem Ipsum";
const content =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const MainPage = () => {
  return (
    <>
      <div className="py-[100px] px-[60px] h-full flex flex-row justify-between gap-36">
        <div className=" flex flex-1 flex-col justify-center grow-1 gap-10">
          <TitleFont>{title}</TitleFont>
          <MediumFont>{content}</MediumFont>
          <BlueATag href="#">More about Felog</BlueATag>
        </div>
        <div className="flex flex-1 grow-1">
          <img
            src="../../../assets/MainPageImage.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
