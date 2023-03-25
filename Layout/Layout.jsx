import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
    <Head>
        <title>blogify</title>
    </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
