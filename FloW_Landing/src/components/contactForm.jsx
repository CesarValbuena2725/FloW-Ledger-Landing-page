import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: 0;
  padding: 10% 5%;
  background: none;
  border-radius: 8px;

  ::placeholder {
    color: #FFD3D5;
    opacity: 1;
  }
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 2px solid #92487A;
  background-color: #92487A;
  border-radius: 4px;
  font-size: 1rem;
  color: #FFD3D5;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

`;

const StyledTextarea = styled.textarea`
  padding: 0.5rem;
  border: 2px solid #92487A;
  background-color: #92487A;
  border-radius: 4px;
  color: #FFD3D5;
  font-size: 1rem;
  resize: vertical;
  width: 80%;
`;

const StyledButton = styled.button`
  padding: 0.7rem 1rem;
  border: 2px solid #92487A;
  background: none;
  color: #FFD3D5;
  font-size: 1rem;
  border-radius: 4px;
  width: 50%;
  cursor: pointer;
  
  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mblnvznl");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setEmail("");
      setMessage("");
      alert("Message sent! 🎉");
    }
  }, [state.succeeded]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        placeholder="Email address"
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <StyledTextarea
        placeholder="Your full name"
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={5}
      />

      <StyledButton disabled={state.submitting}>Send</StyledButton>
    </StyledForm>
  );
}
