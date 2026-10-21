import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import ContactCta from "../components/ContactCta";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <ContactCta />
      <Footer />
    </>
  );
};

export default DefaultLayout;
