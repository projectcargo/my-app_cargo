import React from 'react'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Photo/logo.png'  
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
        <header class="text-gray-600 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <img src={Logo} alt="" height="20px" width="50px" className='flex justify-center items-center'/>
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <span class="ml-5 text-xl">ShipWaves</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        {/* home is necessary To navingate from other page to Home page */}
      <Link to="/" class="mr-6 hover:text-white" target='_self'>Home</Link>
      <Link to="/booking" class="mr-6 hover:text-white" target="_self">Booking</Link>
      <Link to="/news" class="mr-6 hover:text-white" target="_self">Waether News</Link>
      <Link to="/about" class="mr-6 hover:text-white" target="_self">About-Us</Link>
      <Link to="/contact-us" class="mr-6 hover:text-white" target="_self">Contact-Us</Link>
      <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hiring</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tracking
              </NavDropdown.Item>    
              <NavDropdown.Item href="#acti on/3.3">Scheduling</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Refund Policy
              </NavDropdown.Item>              
            </NavDropdown>
    </nav>
    <Button variant="outline-secondary" > Login </Button>{' '}

    {/* <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
  </div>
</header>
    </div>
  )
}

export default Navbar;