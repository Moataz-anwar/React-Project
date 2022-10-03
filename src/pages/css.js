import Header from "../component/Header";
import Footer from "../component/Footer";
import MainContent from "../component/MainContent";
import { Helmet } from 'react-helmet-async';

const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta name="description" content="الموقع الرسمي للمبرمج معتز انور" />
      </Helmet>

      <Header />

      <MainContent pageName="CSS Page" />

      <Footer />
    </>
  );
};

export default Css;
