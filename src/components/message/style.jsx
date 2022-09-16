import { devices } from "../../mediaQueries/media";
import styled from "styled-components";
export const Container = styled.div`
  background: rgb(255, 255, 255);
  width: 100%;
`;

export const MessageBlock = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 10px;
  box-sizing: border-box;
  @media (${devices.laptop}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const MessageSend = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  @media (${devices.laptop}) {
    width: 100%;
  }
`;
export const Contact = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  @media (${devices.laptop}) {
    width: 100%;
  }
`;
export const ContactTitle = styled.h2`
  font-size: 36px;
`;
export const Email = styled.input`
  border-radius: 5px;
  outline: none;
  border: 1px solid #b8b9b6;
  width: 70%;
  height: 30px;
  box-sizing: border-box;
  &:focus {
    border: 3px solid #816023;
    transition: 100ms;
  }
  @media (${devices.laptop}) {
    width: 100%;
  }
`;
export const MesssageArea = styled.textarea`
  border-radius: 5px;
  outline: none;
  border: 1px solid #b8b9b6;
  width: 70%;
  height: 100px;
  box-sizing: border-box;
  resize: none;
  &:focus {
    border: 3px solid #816023;
    transition: 100ms;
  }
  @media (${devices.laptop}) {
    width: 100%;
  }
`;
export const ButtonSend = styled.button`
  max-width: 100px;
  padding: 5px 10px;
  background: transparent;
  cursor: pointer;
  border: 2px solid #816023;
  font-family: PlayFair-regular;
  font-weight: bold;
  color: #816023;
  border-radius: 7px;
  transition: 200ms;
  &:hover {
    background-color: #816023;
    color: white;
    transition: 200ms;
  }
`;
export const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #816023;
  @media (${devices.laptop}) {
    align-items: center;
  }
`;
export const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
