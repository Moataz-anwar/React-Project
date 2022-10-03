


import Header from '../component/Header';
import Footer from '../component/Footer';
import MainContent from '../component/MainContent';
import { Helmet } from 'react-helmet-async';

const Html = () => {
  return (
    <>
      <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="الموقع الرسمي للمبرمج معتز انور" />
      </Helmet>

    <Header />
    <MainContent pageName="HTML Page"  />   
    <Footer />
  </>
  );
}

export default Html;
