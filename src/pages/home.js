
import Header from '../component/Header';
import Footer from '../component/Footer';
import MainContent from '../component/MainContent';
import { Helmet} from 'react-helmet-async';



const Home = () => {
  return (
    <>

    <Helmet>
        <title>HOME Page</title>
        <meta name="description" content="الموقع الرسمي للمبرمج معتز انور" />
    </Helmet>

    <Header />   

    <MainContent   pageName="HOME Page"         />   

    <Footer />
  </>
  );
}

export default Home;
