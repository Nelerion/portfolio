import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { useEffect } from "react";
import { devices } from "../../mediaQueries/media";

const Container = styled.div`
  background: rgb(255, 255, 255);
  width: 100%;
`;

const MessageBlock = styled.div`
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
const MessageSend = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  @media (${devices.laptop}) {
    width: 100%;
  }
`;
const Contact = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  @media (${devices.laptop}) {
    width: 100%;
  }
`;
const ContactTitle = styled.h2`
  font-size: 36px;
`;
const Email = styled.input`
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
const MesssageArea = styled.textarea`
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
const ButtonSend = styled.button`
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
const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #816023; ;
  @media (${devices.laptop}) {
    align-items: center;
  }
`;
const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Message = () => {
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("mgeqaanl");

  useEffect(() => {
    if (state.succeeded) {
      setMessage("Отправлено");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  }, [state.succeeded]);
  return (
    <Container>
      <MessageBlock>
        <Contact>
          <ContactTitle>Contact</ContactTitle>
        </Contact>
        <MessageSend>
          <ContactForm onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <Email id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="email">Message</label>
            <MesssageArea id="message" name="message" maxLength={200} />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <ButtonBlock>
              <ButtonSend type="submit" disabled={state.submitting}>
                Send
              </ButtonSend>
              {message}
            </ButtonBlock>
          </ContactForm>
        </MessageSend>
      </MessageBlock>
    </Container>
  );
};

export default Message;
