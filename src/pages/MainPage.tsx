import { PropsWithChildren } from "react";

import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const MainPage = ({ children }: PropsWithChildren<Record<never, never>>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainPage;
