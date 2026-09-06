import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
