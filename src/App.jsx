import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";
import SitoMatrimonioPage from "./pages/SitoMatrimonioPage";

const App = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/sito-matrimonio" element={<SitoMatrimonioPage />} />
      </Route>
    </Routes>
  );
};

export default App;
