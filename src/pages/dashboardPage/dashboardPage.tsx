import { RiCloseFill } from "react-icons/ri";
import { FlexRow } from "../../styles/commonDivStyles";
import { NotePopup, PopupButtonDiv } from "./dashboardStyles";
import LatestDocs from "./latestDocs";
import MyNotes from "./myNotes";
import NoteSetting from "./noteSetting";
import { IoCheckmark } from "react-icons/io5";
import { useNotePopupToggleStore } from "../../stores/dashboardStores";

const DashboardPage = () => {
  const { isOpen, reset } = useNotePopupToggleStore()
  console.log(isOpen)
  return (
    <>
      <NotePopup $isOpen={isOpen}>
        <FlexRow $gap={10}>
          <PopupButtonDiv onClick={() => reset()}>
            <RiCloseFill className="text-white w-5 h-5" />
          </PopupButtonDiv>
          <PopupButtonDiv onClick={() => reset()}>
            <IoCheckmark className="text-white w-5 h-5" />
          </PopupButtonDiv>
        </FlexRow>
        <NoteSetting />
      </NotePopup>
      <LatestDocs />
      <MyNotes />
    </>
  );
};

export default DashboardPage;
