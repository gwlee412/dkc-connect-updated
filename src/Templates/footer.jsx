import { flexbox } from "@mui/system";
import React from "react";
import {
  FooterContainer,
  Logo,
  Links,
} from "../HomepageComponents/StyledHomePage";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <div
          style={{
            width: "30%",
            height: "25vh",
            marginTop: "50px",
            marginLeft: "80px",
          }}
        >
          <Logo style={{ color: "white" }}>DKC Connect.</Logo>
          <Grid item xs={1} style={{ paddingTop: "50px" }}>
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
            <EmailIcon className="icon" />
          </Grid>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "30vh",
            marginTop: "100px",
            marginLeft: "100px",
          }}
        >
          <Links
            style={{ color: "white", fontSize: "20px", paddingBottom: "20px" }}
          >
            Explore DKC
          </Links>
          <Links className="link">MSM</Links>
          <Links className="link">GOT</Links>
          <Links className="link">Harvest Life</Links>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "30vh",
            marginTop: "100px",
            marginLeft: "300px",
          }}
        >
          <Links
            style={{ color: "white", fontSize: "20px", paddingBottom: "20px" }}
          >
            About DKC Connect
          </Links>
          <Link to="/aboutus" className="link">
            About Us
          </Link>
        </div>
      </FooterContainer>

      <div style={{ height: "15vh", width: "100%", backgroundColor: "black" }}>
        <hr></hr>
        <div
          style={{
            textAlign: "center",
            margin: "auto",
            color: "white",
            fontSize: "15px",
            paddingTop: "30px",
          }}
        >
          ⒸCopyright I think
        </div>
      </div>
    </div>
  );
};

export default Footer;
