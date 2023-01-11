import React from "react";
import Template from "../Templates/template";
import Footer from "../Templates/footer";
import {
  SectionContainer,
  CardContainer,
  TextContainer,
} from "../HomepageComponents/StyledHomePage";

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "#C8DBBE" }}>
      <Template />
      <CardContainer style={{ width: "95%", backgroundColor: "#FAF9F6" }}>
        <TextContainer style={{ color: "#C8DBBE" }}>
          <br></br>About Us
        </TextContainer>
        <div className="slide-in" style={{ backgroundColor: "#C8DBBE" }}></div>
      </CardContainer>

      <SectionContainer
        style={{ backgroundColor: "#C8DBBE" }}
      ></SectionContainer>
      <SectionContainer></SectionContainer>
    </div>
  );
};

export default AboutUs;
