import moment from "moment";
import Calendar from "react-calendar";
// import "../../../../../node_modules/react-calendar/dist/Calendar.css";
import "../../../../styles/CalendarStyles.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const UserDropdownLeft = () => {
  return (
    <>
      <Calendar
        calendarType="gregory"
        locale="ko-KR"
        minDetail="year"
        defaultView="month"
        formatDay={(locale, date) => moment(date).format("DD")}
        nextLabel={<MdOutlineArrowForwardIos />}
        prevLabel={<MdOutlineArrowBackIos />}
      />
    </>
  );
};

export default UserDropdownLeft;
