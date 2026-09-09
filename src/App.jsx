import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import SitoMatrimonioPage from "./pages/SitoMatrimonioPage";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sito-matrimonio" element={<SitoMatrimonioPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
