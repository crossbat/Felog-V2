import { Route, Routes } from "react-router";
import MainLayout from "../layouts/mainLayout/layout";
import LandingPage from "../pages/landingPage/landingPage";
import DashboardPage from "../pages/dashboardPage/dashboardPage";

const RouteWithLayout = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/user" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};

export default RouteWithLayout;
