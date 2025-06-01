import { Routes, Route } from "react-router-dom";
import { DesktopHome } from "./screens/DesktopHome";
import BuyPage from "./screens/BuyPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DesktopHome />} />
      <Route path="/buy" element={<BuyPage />} />
    </Routes>
  );
}