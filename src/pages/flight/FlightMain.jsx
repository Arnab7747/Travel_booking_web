import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import FlightHeaderTop from './FlightHeaderTop'

import FlightSearch from './FlightSearch'
import Footer from '../../components/footer/Footer'


export default function FlightMain() {
  return (
    <div>
        <Navbar/>
        <FlightHeaderTop/>
        
        <FlightSearch/>
        <Footer/>
      
    </div>
  )
}
