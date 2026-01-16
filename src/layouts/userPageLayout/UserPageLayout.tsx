import { Outlet } from "react-router";

const UserPageLayout = () => {
  return (
    <div className="flex flex-col w-[1440px] h-full py-[100px] gap-[30px] mx-auto">
      <Outlet />
    </div>
  );
};

export default UserPageLayout;
