import styled from "styled-components";
import { devices } from "../../mediaQueries/media";

export const HeaderBlock = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding:0 30px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  position: fixed;
  background-color: #66667e;
  -webkit-box-shadow: 0px 5px 8px -5px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 0px 5px 8px -5px rgba(0, 0, 0, 0.72);
  box-shadow: 0px 5px 8px -5px rgba(0, 0, 0, 0.72);
  z-index: 10;
  opacity: 0.9;
`;
export const Title = styled.h1`
  font-family: "Martel", serif;
  font-size: calc(30px + 13 * (100vw / 1200));
  margin: 0;
  font-family: PlayFair-black;
  color: #26142c;
  letter-spacing: 30px;
  padding: 0 10px;
  @media (${devices.tablet}) {
    letter-spacing: 15px;
  }
  @media (${devices.mobileL}) {
    letter-spacing: 5px;
  }
  
`;
export const Border = styled.span`
  width: 100%;
  height: 5px;
  background-color: #26142c;
`;
export const LetterChangeColor = styled.span`
  transition: 300ms;
  cursor: default;
  &:hover {
    transition: 300ms;
    color: white;
  }
`;
export const LastLetter = styled(LetterChangeColor)`
  letter-spacing: 0;
`;

