import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import { Outlet, } from "react-router-dom";
import Detail from './components/Detail/Detail.jsx'
import Footer from './components/Footer/Footer.jsx';
import ContactBox from './components/ContactBox/ContactBox.jsx';
function App() {
  const location = useLocation();
  const hideCarousel = location.pathname === "/";

  return (
    <div >
      {!hideCarousel && <Header />}
      <Outlet />
      {!hideCarousel && <ContactBox />}
      {!hideCarousel && <Footer />}
    </div>
  );
}

export default App;
