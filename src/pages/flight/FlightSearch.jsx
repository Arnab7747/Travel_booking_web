import React, { useState, useEffect } from "react";
import "./flight.css";



const FlightSearch = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [roundTrip, setRoundTrip] = useState(false);
  const [flights, setFlights] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Simulate fetching data from MongoDB
    const fetchData = async () => {
      try {
        const response = await fetch("/api/flights"); // Replace with your API endpoint
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    // Perform the search based on the currentLocation, destination, and dates
    const results = flights.filter(
      (flight) =>
        flight.origin.toLowerCase().includes(currentLocation.toLowerCase()) &&
        flight.destination.toLowerCase().includes(destination.toLowerCase()) &&
        (!departureDate || flight.departureDate === departureDate) &&
        (!returnDate || flight.returnDate === returnDate)
    );

    // Update the searchResults state
    setSearchResults(results);
  };

  return (
    <>
      
      <div className="flight-search-container">
        <div className="heading">Flight Search</div>
        <div className="input-container" id="curr">
          <label>Current Location:</label>
          <input
            type="text"
            placeholder="Enter current location"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
          />
        </div>
        <div className="input-container" id="des">
          <label>Destination:</label>
          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Departure Date:</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <div className="input-container-round">
          <label>Round Trip :</label>

          <input
            id="box"
            type="checkbox"
            checked={roundTrip}
            onChange={() => setRoundTrip(!roundTrip)}
          />
        </div>
        {roundTrip && (
          <div className="input-container">
            <label>Return Date:</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        )}
        <div className="search-button-container">
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="search-results">
        <div className="heading">Search Results</div>
        {searchResults.length === 0 ? (
          <p>No flights found</p>
        ) : (
          <ul>
            {searchResults.map((flight, index) => (
              <li key={index}>
                {`Flight from ${flight.origin} to ${flight.destination}`}
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
     

      
    </>
  );
};

export default FlightSearch;
