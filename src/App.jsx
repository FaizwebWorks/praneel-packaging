import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import IndustryPage from "./pages/IndustryPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rigid-boxes/:slug" element={<ProductPage />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
