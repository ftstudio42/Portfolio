import React, { useState } from 'react';
import styled from 'styled-components';
import { Column } from '../Styles/StyledComponents';

const CenterContainer = styled(Column)`
  align-items: center;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const ContactContainer = styled(Column)`
  width: 30vw;
  padding: 30px 60px;
    align-items: center;

  background-color: #121212;
  border-radius: 10px;
  color: white;

  @media (max-width: 768px) {
    width: 70vw;
    padding: 10px 30px;
  }
`;
const Title = styled.h2`
  margin: 30px;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 15px;
  }
`;

const Input = styled.input`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  background-color: #25d366;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #1da851;
  }
`;

const ContactMe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Message from ${email}`);
    const body = encodeURIComponent(message);
    const mailtoUrl = `mailto:${process.env.REACT_APP_MAIL_ADDRESS}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <CenterContainer>
      <ContactContainer>
        <Title>Contact Us</Title>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextArea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleSubmit}>Send Email</Button>
      </ContactContainer>
    </CenterContainer>
  );
};

export default ContactMe;