import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import SitoMatrimonioPage from "./pages/SitoMatrimonioPage";
import PartecipazioniDigitaliPage from "./pages/PartecipazioniDigitaliPage";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/sito-matrimonio" element={<SitoMatrimonioPage />} />

          <Route
            path="/partecipazioni-digitali"
            element={<PartecipazioniDigitaliPage />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
