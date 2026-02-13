import { FiPlus } from "react-icons/fi";
import { SmallFont } from "../../styles/commomTextStyles";
import {
  NoteExampleDiv,
  NoteSettingContainer,
  NoteSettingDiv,
} from "./dashboardStyles";
import { FlexCol } from "../../styles/commonDivStyles";
import { NoteTitleInput } from "../../styles/commonInputStyles";

const NoteSetting = () => {
  return (
    <NoteSettingContainer>
      <NoteExampleDiv className="rounded-xl" />
      <NoteSettingDiv>
        <FlexCol $gap={3}>
          <SmallFont $bold={false}>노트 이름</SmallFont>
          <NoteTitleInput />
        </FlexCol>
        <FlexCol $gap={3} className="w-full">
          <SmallFont>표지 디자인</SmallFont>
          <div className="grid grid-cols-5 gap-5">
            <NoteExampleDiv className="bg-gray-100 rounded-md flex justify-center items-center">
              <FiPlus className="w-10 h-auto text-gray-400" />
            </NoteExampleDiv>
            <NoteExampleDiv className="bg-amber-200 rounded-md" />
            <NoteExampleDiv className="bg-green-200 rounded-md" />
            <NoteExampleDiv className="bg-blue-200 rounded-md" />
            <NoteExampleDiv className="bg-violet-200 rounded-md" />
          </div>
        </FlexCol>
      </NoteSettingDiv>
    </NoteSettingContainer>
  );
};

export default NoteSetting;
