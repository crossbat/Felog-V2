import { Route, Routes } from "react-router";
import MainLayout from "../layouts/mainLayout/layout";
import LandingPage from "../pages/landingPage/landingPage";
import DashboardPage from "../pages/dashboardPage/dashboardPage";
import UserPageLayout from "../layouts/userPageLayout/UserPageLayout";
import CalendarPage from "../pages/calendarPage/CalendarPage";

const RouteWithLayout = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/user" element={<UserPageLayout />}>
          <Route path="board" element={<DashboardPage />} />
          <Route path="cal" element={<CalendarPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouteWithLayout;
