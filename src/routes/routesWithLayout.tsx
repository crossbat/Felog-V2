import { Route, Routes } from "react-router";
import MainLayout from "../layouts/mainLayout/layout";
import LandingPage from "../pages/landingPage/landingPage";
import DashboardPage from "../pages/dashboardPage/dashboardPage";
import UserPageLayout from "../layouts/userPageLayout/UserPageLayout";
import SignPage from "../pages/signPage/SignPage";

const RouteWithLayout = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/user" element={<UserPageLayout />}>
          <Route path="board" element={<DashboardPage />} />
        </Route>
        <Route path="/sign" element={<SignPage />} />
      </Route>
    </Routes>
  );
};

export default RouteWithLayout;
