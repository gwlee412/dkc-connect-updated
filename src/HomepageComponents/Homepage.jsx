import React from "react";
import Template from "../Templates/template.jsx";
import "./navbar.css";
import "../Templates/template.css";
import Footer from "../Templates/footer.jsx";

import {
  CardContainer,
  SectionContainer,
  TextContainer,
} from "./StyledHomePage.jsx";

const Homepage = () => {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <div className="App">
      <Template />

      <SectionContainer style={{ backgroundColor: "#323330" }}>
        <CardContainer style={{ width: "95%", backgroundColor: "#FAF9F6" }}>
          <TextContainer style={{ marginLeft: "100vh" }}>
            <br></br>Welcome
          </TextContainer>

          <div
            className="slide-in"
            style={{ backgroundColor: "#323330" }}
          ></div>
        </CardContainer>
      </SectionContainer>

      <SectionContainer style={{ height: "100vh", backgroundColor: "#323330" }}>
        <CardContainer>
          <div className="dkcbuilding"></div>
        </CardContainer>
      </SectionContainer>
      <SectionContainer
        style={{ backgroundColor: "#FAF9F6" }}
      ></SectionContainer>
      <Footer />
    </div>
  );
};

export default Homepage;
