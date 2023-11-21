import React from "react";
import {
  faBed,
 faPlane
 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./flightheadertop.css";

export default function FlightHeaderTop() {
  return (
    <div>
      <div className="main">
        
            <div class="box ">
              <FontAwesomeIcon icon={faBed} />
              <span class="ml-1">Stays</span>
            </div>
        
         
            <div class="box ">
              <FontAwesomeIcon icon={faPlane} />
              <span class="ml-1">Flights</span>
            </div>
         
         </div>
       
     
    </div>
  );
}
