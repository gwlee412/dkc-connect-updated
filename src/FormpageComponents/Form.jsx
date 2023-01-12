import React from "react";
import { FormContainer } from "./StyledFormPage";
import "./Formpage.css";

export default function Form() {
  return (
    <FormContainer>
      <form
        style={{ display: "flex", flexWrap: "wrap" }}
        name="contact"
        method="post"
        id="form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div id="input-container-mini">
          <label htmlFor="name">Name</label> <br />
          <input
            style={{
              borderRadius: "5px",
              height: "30px",
              marginRight: "10px",
              width: "85%",
            }}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div id="input-container-mini">
          <label htmlFor="email">Email</label> <br />
          <input
            style={{
              borderRadius: "5px",
              height: "30px",

              width: "85%",
            }}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div id="input-container">
          <label htmlFor="message">
            Please write a brief description of your interests and our team will
            reach out
          </label>
          <br />
          <textarea
            style={{
              height: "100px",
              borderRadius: "5px",

              width: "95%",
            }}
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <div id="input-container">
          <input
            style={{
              color: "white",
              borderRadius: "7px",
              backgroundColor: "blue",
              width: "95%",
              height: "40px",
              cursor: "pointer",
            }}
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </FormContainer>
  );
}
