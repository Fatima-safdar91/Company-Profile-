
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Aboutus from './Components/Aboutus';
// import Portfolio from './Components/Portfolio';
// import Services from './Components/Services';
// import Testimonial from './Components/Testimonial';
import NavigationBar from './Components/NavBar';
import Slider from './Components/Slider';
import { SliderData } from './Components/SliderData';



const App = () => {
  return (
    <Router>
        <NavigationBar />
      <div style={{ paddingTop: '70px' }}>
        <Slider  slides={SliderData}/>
        <Routes>
        <Route path="/" exact element={<h2>Portfolio</h2>} />
          <Route path="/aboutus" exact element={<h2>Aboutus</h2>} />
          <Route path="/services" exact element={<h2>services</h2>} />
          <Route path="/testimonial" exact element={<h2>testimonial</h2>} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
