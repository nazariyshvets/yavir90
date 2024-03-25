import { PropsWithChildren } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const MainPage = ({ children }: PropsWithChildren<Record<never, never>>) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainPage;
