import { Route, Routes } from "react-router";
import MainLayout from "../layouts/mainLayout/layout";
import MainPage from "../pages/mainPage/mainPage";

const RouteWithLayout = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" index element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default RouteWithLayout;
