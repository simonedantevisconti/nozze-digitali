import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import SitoMatrimonioPage from "./pages/SitoMatrimonioPage";
import PartecipazioniDigitaliPage from "./pages/PartecipazioniDigitaliPage";
import RsvpMatrimonioPage from "./pages/RsvpMatrimonioPage";
import GestioneInvitatiMatrimonioPage from "./pages/GestioneInvitatiMatrimonioPage";

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

        <Route path="/rsvp-matrimonio" element={<RsvpMatrimonioPage />} />

        <Route
          path="/gestione-invitati-matrimonio"
          element={<GestioneInvitatiMatrimonioPage />}
        />
      </Routes>
    </>
  );
};

export default App;
