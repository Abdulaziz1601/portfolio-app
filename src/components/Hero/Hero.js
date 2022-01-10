import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle >
        Hello there <br /> 
        I am a Front-End developer 
      </SectionTitle>
      <SectionText>
        I develop Single Page Applications with React, using Redux
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/Abdulaziz1601'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;