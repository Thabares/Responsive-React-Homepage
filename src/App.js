import styled, { css } from 'styled-components';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Price from './components/Price';
import Service from './components/Service';
import React, { useRef } from 'react';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

function App() {
  const smallScreen = window.screen.width <= 480 ? true : false;
  const IntroRef = useRef(null);
  const FeatureRef = useRef(null);
  const ServiceRef = useRef(null);
  const PriceRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollToIntro = () => {
    IntroRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };
  const scrollToFeature = () => {
    FeatureRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };
  const scrollToService = () => {
    ServiceRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };
  const scrollToPrice = () => {
    PriceRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };
  const scrollToContact = () => {
    ContactRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <>
      <Container ref={IntroRef}>
        <Navbar
          scrollToIntro={scrollToIntro}
          scrollToFeature={scrollToFeature}
          scrollToService={scrollToService}
          scrollToPrice={scrollToPrice}
          scrollToContact={scrollToContact}
        />
        <Intro />
        <IntoShape />
      </Container>
      <Container ref={FeatureRef}>
        <Feature />
        <FeatureShape />
      </Container>
      <Container ref={ServiceRef}>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container ref={PriceRef}>
        <Price />
        <PriceShape />
      </Container>
      <Container ref={ContactRef}>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
