import React from "react";
import { Image } from "antd";
function LandingBodyPage() {
  return (
    <section style={landingBodyPage}>
      <div style={box}>
        <h3>Excutive apartment</h3>
        <Image
          width={300}
          src="https://clintwoodapartments.com/wp-content/uploads/home-image.jpg"
        />
        <p>
          Just 5 minutes to Twelve Corners, Park Ave, the UR Medical Center and
          the Canal Path makes Clintweeod and attractive place to live.
        </p>
      </div>
      <div style={box}>
        <h3>Overview</h3>
        <ul>
          <li>Desirable Brighton School Distric</li>
          <li>Heat and hot water included</li>
          <li>Relax at the pool</li>
          <li>Close to shopping</li>
          <li>Onsite Laundry Facilities</li>
          <li>Credit Card Payments Accepted</li>
        </ul>
      </div>
      <div style={box}>
        <h3>Location Details</h3>
        <p>1600 Pennsylvania Avenue NW, Washington, DC 20500</p>
      </div>
    </section>
  );
}

let landingBodyPage = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  margin: "2% 20%"
};

let box = {
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  width: "28%",
  height: "auto",
  fontSize: "19px"
};

export default LandingBodyPage;
