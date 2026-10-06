import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";
import PartecipazioniDigitaliPage from "./pages/PartecipazioniDigitaliPage";
import SitoMatrimonioPage from "./pages/SitoMatrimonioPage";
import RsvpMatrimonioPage from "./pages/RsvpMatrimonioPage";
import GestioneInvitatiMatrimonioPage from "./pages/GestioneInvitatiMatrimonioPage";

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

          <Route path="/rsvp-matrimonio" element={<RsvpMatrimonioPage />} />

          <Route
            path="/gestione-invitati-matrimonio"
            element={<GestioneInvitatiMatrimonioPage />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
