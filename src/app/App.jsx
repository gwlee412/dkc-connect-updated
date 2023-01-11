import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../HomepageComponents/Homepage";
import AboutUs from "../AboutUsComponents/AboutUs";
import FormPage from "../FormpageComponents/FormPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
