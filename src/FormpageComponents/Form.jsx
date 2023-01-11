import React from "react";
import { FormContainer } from "./StyledFormPage";

export default function Form() {
  return (
    <FormContainer>
      <form
        style={{ display: "flex", flexWrap: "wrap" }}
        name="contact"
        method="post"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">Name</label> <br />
          <input
            style={{
              borderRadius: "5px",
              height: "30px",
              marginRight: "10px",
              width: "250px",
            }}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            style={{
              borderRadius: "5px",
              height: "30px",

              width: "250px",
            }}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="message">
            Please write a brief description of your interests and our team will
            reach out
          </label>
          <br />
          <input
            style={{
              height: "100px",
              borderRadius: "5px",

              width: "520px",
            }}
            id="message"
            name="message"
            required
          ></input>
        </div>
        <div>
          <input
            style={{
              color: "white",
              borderRadius: "7px",
              backgroundColor: "blue",
              width: "200px",
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
