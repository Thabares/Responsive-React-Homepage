import React from 'react';
import styled from 'styled-components';
import App from '../img/app.jpg';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 90%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  margin-top: 30px;
  color: #333;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
  width: 97%;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design
          <br />
          <b>good</b> business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Desc>
        <Desc>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Desc>
        <Button>Learn More</Button>
      </Right>

      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
