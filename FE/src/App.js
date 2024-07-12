import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import { Outlet, } from "react-router-dom";
import Detail from './components/Detail/Detail.jsx'
function App() {
  const location = useLocation();
  const hideCarousel = location.pathname === "/";

  return (
    <div >
      {!hideCarousel && <Header />}
      <Outlet />
      {/* <Detail></Detail> */}
    </div>
  );
}

export default App;
