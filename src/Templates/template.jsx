import "./template.css";
import Navbar from "../HomepageComponents/navbar";
import { useState, useEffect } from "react";
import {
  Header,
  Logo,
  Login,
  LoginButtons,
  BackGroundContainer,
  MenuBar,
} from "../HomepageComponents/StyledHomePage";
import { Outlet, Link } from "react-router-dom";

export default function Template() {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }
  return (
    <BackGroundContainer>
      <Header>
        <MenuBar>
          <Logo>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              DKC Connect.
            </Link>
          </Logo>
          <Login>
            <LoginButtons>Login</LoginButtons>
            <LoginButtons>Register</LoginButtons>
          </Login>
        </MenuBar>
      </Header>
      <Navbar visible={visible} />
    </BackGroundContainer>
  );
}
