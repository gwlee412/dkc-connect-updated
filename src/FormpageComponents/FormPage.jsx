import React from "react";
import Form from "./Form";
import Typed from "react-typed";
import "./Formpage.css";
import {
  FormDescription,
  PageContainer,
  TypedDescription,
} from "./StyledFormPage";
import Template from "../Templates/template";
import Footer from "../Templates/footer";
import ProcessDescription from "./ProcessDescription";

export default function FormPage({ visible }) {
  return (
    <>
      <Template />
      <PageContainer>
        <div id="form-container">
          <FormDescription>DKC Connect Application Form</FormDescription>
          <Form />
        </div>
        <div id="image-container">
          <TypedDescription>
            <Typed
              strings={["Apply to join a growing network!"]}
              typeSpeed={40}
            />
          </TypedDescription>

          <div id="form-image"></div>
          <div id="image-attribute">
            <a href="https://www.freepik.com/free-vector/character-illustration-diverse-people-world_3585388.htm#query=diversity&position=0&from_view=search&track=sph">
              Image by rawpixel.com
            </a>{" "}
            on Freepik
          </div>
        </div>
      </PageContainer>
      <ProcessDescription />
      <Footer />
    </>
  );
}
