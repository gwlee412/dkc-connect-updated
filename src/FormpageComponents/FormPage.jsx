import React from "react";
import Form from "./Form";
import { FormDescription, PageContainer } from "./StyledFormPage";
import Template from "../Templates/template";
import Footer from "../Templates/footer";

export default function FormPage({ visible }) {
  return (
    <>
      <Template />
      <PageContainer>
        <FormDescription>DKC Connect Application Form</FormDescription>
        <Form />
      </PageContainer>
      <Footer />
    </>
  );
}
