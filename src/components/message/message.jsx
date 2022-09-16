import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { useEffect } from "react";

import {
  ButtonBlock,
  ContactForm,
  ButtonSend,
  MesssageArea,
  Email,
  ContactTitle,
  Contact,
  MessageSend,
  MessageBlock,
  Container,
} from "./style";
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
