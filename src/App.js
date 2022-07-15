import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from './components/Details';
import Footer from './components/Footer';
import Homepage from './Homepage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="" element={<Homepage/>}> </Route>
          <Route path="/details" element={<Details/>}> </Route>
       
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
