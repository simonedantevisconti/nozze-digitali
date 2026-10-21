import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";
import PartecipazioniDigitaliPage from "./pages/PartecipazioniDigitaliPage";
import SitoMatrimonioPage from "./pages/SitoMatrimonioPage";
import ServiziPrezziPage from "./pages/ServiziPrezziPage";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/partecipazioni-digitali"
            element={<PartecipazioniDigitaliPage />}
          />
          <Route path="/sito-matrimonio" element={<SitoMatrimonioPage />} />
          <Route path="/servizi-prezzi" element={<ServiziPrezziPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
