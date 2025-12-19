import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  padding: 8% 5%;
  background: none;
  border-radius: 8px;

  ::placeholder {
    color: #F5F7FA;
    opacity: 1;
  }

  @media (min-width: 768px){
    width: 70%;
    padding: 4% 2%;
  }

  @media (min-width: 1024px){
    width: 50%;
  }
`;

const StyledInput = styled.input`
  padding: 0.7rem;
  border: 2px solid #153163;
  background-color: #153163;
  border-radius: 4px;
  font-size: 1rem;
  color: #F5F7FA;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

`;

const StyledTextarea = styled.textarea`
  padding: 0.5rem;
  border: 2px solid #153163;
  background-color: #153163;
  border-radius: 4px;
  color: #F5F7FA;
  font-size: 1rem;
  resize: vertical;
  width: 100%;
`;

const StyledButton = styled.button`
  padding: 0.7rem 1rem;
  border: 2px solid #153163;
  background: none;
  color: #0B3D91;
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
      // avoid synchronous setState calls inside effect to prevent cascading renders
      setTimeout(() => {
        setEmail("");
        setMessage("");
      }, 0);
      alert("Message sent! 🎉");
    }
  }, [state.succeeded]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2 style={{textAlign: 'center'}}>Get in touch</h2>
      <p style={{color: '#0B3D91', textAlign: 'center', fontWeight: 'bold'}}>Reach out and move your business forward.</p>
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
