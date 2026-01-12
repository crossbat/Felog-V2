import type React from "react";
import Header from "../../components/header/header";

const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen px-[60px] flex flex-col content-stretch">
      <div className="flex flex-0 shrink items-end">
        <Header />
      </div>
      <div className="flex flex-1 shrink-9 min-h-0 overflow-hidden">
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
