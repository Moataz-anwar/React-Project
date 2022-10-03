import Header from "../component/Header";
import Footer from "../component/Footer";
import MainContent from "../component/MainContent";
import { Helmet } from 'react-helmet-async';

const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>JAVASCRIPT Page</title>
        <meta name="description" content="الموقع الرسمي للمبرمج معتز انور" />
      </Helmet>

      <Header />
      <MainContent pageName="JAVASCRIPT Page" />
      <Footer />
    </>
  );
};

export default Javascript;
