import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
`;

const Navbar = ({
  scrollToIntro,
  scrollToFeature,
  scrollToService,
  scrollToPrice,
  scrollToContact,
}) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem onClick={scrollToIntro}>Home</MenuItem>
            <MenuItem onClick={scrollToFeature}>Features</MenuItem>
            <MenuItem onClick={scrollToService}>Services</MenuItem>
            <MenuItem onClick={scrollToPrice}>Pricing</MenuItem>
            <MenuItem onClick={scrollToContact}>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN TODAY</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
