import { NavLink } from "react-router";

const UserNav = () => {
  return (
    <>
      <li>
        <NavLink to="/user/cal">달력</NavLink>
      </li>
      <li>
        <NavLink to="/user/board">대시보드</NavLink>
      </li>
      <li>
        <a href="#">미정</a>
      </li>
    </>
  );
};

export default UserNav;
