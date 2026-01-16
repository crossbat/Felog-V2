import { NavLink } from "react-router";

const UserNav = () => {
  return (
    <>
      <li>
        <NavLink to="/user">대시보드</NavLink>
      </li>
      <li>
        <a href="#">달력</a>
      </li>
      <li>
        <a href="#">미정</a>
      </li>
    </>
  );
};

export default UserNav;
