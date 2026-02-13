import { RiCloseFill } from "react-icons/ri";
import { FlexRow } from "../../styles/commonDivStyles";
import { NotePopup } from "./dashboardStyles";
import LatestDocs from "./latestDocs";
import MyNotes from "./myNotes";
import NoteSetting from "./noteSetting";
import { IoCheckmark } from "react-icons/io5";

const DashboardPage = () => {
  return (
    <>
      <NotePopup>
        <FlexRow $gap={10}>
          <div className="w-15 h-auto aspect-square rounded-full bg-black flex justify-center items-center ">
            <RiCloseFill className="text-white w-5 h-5" />
          </div>
          <div className="w-15 h-auto aspect-square rounded-full bg-black flex justify-center items-center ">
            <IoCheckmark className="text-white w-5 h-5" />
          </div>
        </FlexRow>
        <NoteSetting />
      </NotePopup>
      <LatestDocs />
      <MyNotes />
    </>
  );
};

export default DashboardPage;
