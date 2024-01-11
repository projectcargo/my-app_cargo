import 'bootstrap/dist/css/bootstrap.min.css';  //css bootstrap link ,without it can't work

import './App.css';
import Navbar from './Compo/Navbar';
import Backer from './Compo/Backer';
import Quotation from './Compo/Quotation';
import Logistic from './Compo/Logistic';
import Banners from './Compo/Banners';
import Services from './Compo/Services';
import Youtube from './Compo/Youtube';
import Request_demo from './Compo/Request_demo'
import Footer from './Compo/Footer';
import Booking from './Compo/Booking';
import { Route, Routes } from 'react-router-dom';
import Home from './Compo/Home';
import Contact_us from './Compo/Contact_us';
import About from './Compo/About';
import Feedback from './Compo/Feedback';
import News from './Compo/News';
import Careers from './Compo/Careers';
function App() {
  return (
    <div className="App">
     {/* <Feedback/> */}
       <Navbar />
       {/* <Contact_us/> */}
       <Careers/>
      {/* <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/newsdel" element={<News />} />
        <Route path="/about" element={<About />} />        
        <Route path="/contact_us" element={<Contact_us />} />
      </Routes>
      <Backer />
      <Quotation />
      <Logistic />
      <Banners />
      <Services />
      <Youtube />
      <Request_demo />
      <Footer />
       */}
    </div>
  );
}

export default App;
