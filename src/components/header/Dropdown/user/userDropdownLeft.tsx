import moment from "moment";
import Calendar from "react-calendar";
import "../../../../styles/CalendarStyles.css";

const UserDropdownLeft = () => {
  return (
    <>
      <Calendar
        calendarType="gregory"
        locale="ko-KR"
        minDetail="year"
        defaultView="month"
        formatDay={(locale, date) => moment(date).format("DD")}
      />
    </>
  );
};

export default UserDropdownLeft;
