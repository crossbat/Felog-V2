import { Route, Routes } from "react-router";
import SignPage from "../pages/signPage/SignPage";

const RouteWithoutLayout = () => {
  return (
    <Routes>
      <Route path="/sign" element={<SignPage />} />
    </Routes>
  );
};

export default RouteWithoutLayout;
