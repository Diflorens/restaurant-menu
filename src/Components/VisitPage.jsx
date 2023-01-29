import React from "react";
import "./VisitPage.css";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
function VisitPage({ setActiveTab, color }) {
  const defaultProps = {
    center: {
      lat: 28.44838265644725,
      lng: -81.47698656602833,
    },
    zoom: 18,
  };

  return (
    <>
      <div className="visit-main">
        <div className="visit-hours">
          <h2>OUR LOCATION & HOURS</h2>
          <p>8031 Turkey Lake Road Suite 700</p>
          <p>Orlando, FL 32819</p>
          <p>Sunday - Thursday 5PM - 10PM</p>
          <p>Friday & Saturday 5PM - 11PM</p>
          <div className="visit-buttons">
            <button onClick={() => setActiveTab(1)} className="visit-button">
              Order online
            </button>

            <a className="visit-button" href="tel:+1(407)-248-8888">
              Order by phone
            </a>
          </div>
        </div>
      </div>
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            color="red"
          />
        </GoogleMapReact>
      </div>
      <div className="bottom-visit">
        <h1>GET IN TOUCH</h1>
        <h3>We'd love to hear from you</h3>
        <div className="get-in-touch-all">
          <div className="get-in-touch">
            <i class="fa-solid fa-phone fa-2xl"></i>
            <p>Got a question?</p>
            <p>We'd love to chat!</p>
            <a href="https://www.google.com/search?q=seito+sushi+baldwin+park&oq=seito+sushi+baldwin+park&aqs=chrome.0.69i59j0l6.1669j0j7&sourceid=chrome&ie=UTF-8">
              (407) 248-8888
            </a>
          </div>
          <div className="get-in-touch">
            <i class="fa-solid fa-envelope fa-2xl"></i>
            <p>Press inquiry?</p>
            <p>Please email: </p>
            <a href="mailto:info@seitosushi.com">info@seitosushi.com</a>
          </div>
          <div className="get-in-touch">
            <i class="fa-regular fa-handshake fa-2xl"></i>
            <p>Care to join our team?</p>
            <p>Submit your resume to</p>
            <a href="mailto:jobs@seitosushi.com">jobs@seitosushi.com</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisitPage;
