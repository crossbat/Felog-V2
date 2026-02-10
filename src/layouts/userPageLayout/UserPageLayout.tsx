import { Outlet } from "react-router";

const UserPageLayout = () => {
  return (
    <div className="px-[var(--page-padding)]">
      <Outlet />
    </div>
  );
};

export default UserPageLayout;
