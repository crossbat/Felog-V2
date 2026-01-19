import { NavLink } from "react-router";

const UserNav = () => {
  return (
    <div className="flex items-center justify-center w-100 h-[80%] bg-[#f5f5f5] px-[50px] rounded-[15px]">
      <ul className="w-full flex list-none justify-between text-lg">
        <li>
          <NavLink to="/user/cal">달력</NavLink>
        </li>
        <li>
          <NavLink to="/user/board">대시보드</NavLink>
        </li>
        <li>
          <a href="#">미정</a>
        </li>
      </ul>
    </div>
  );
};

export default UserNav;
