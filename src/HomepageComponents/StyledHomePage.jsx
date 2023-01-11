import { flexbox } from "@mui/system";
import styled from "styled-components";

export const BackGroundContainer = styled.div`
  background-color: #faf9f6;
  width: 100%;
  height: 75px;
  overflow: hidden;
  top: 0%;
  width: 100%;
`;

export const MenuBar = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 75px;
  width: 100%;
  background-color: #faf9f6;

  z-index: 5;
`;

export const Logo = styled.div`
  order: 1;
  font-weight: bold;
  color: #323330;
  height: 50px;
  padding: 20px;
  font-size: 40px;
`;

export const Login = styled.ul`
  order: 2;
  list-style-type: none;
  padding-top: 10px;
`;
export const LoginButtons = styled.li`
  color: #323330;
  text-transform: uppercase;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  display: inline-block;
`;

export const SectionContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
`;

export const CardContainer = styled.div`
  height: 80vh;
  width: 100%;
`;

export const TextContainer = styled.div`
  padding-top: 45vh;
  padding-left: 50px;
  text-transform: uppercase;
  height: 469px;
  color: #323330;
  font-size: 100px;
  text-align: left;
`;

export const FooterContainer = styled.div`
  height: 40vh;
  width: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const Links = styled.div`
  text-transform: uppercase;
  cursor: pointer;
`;
