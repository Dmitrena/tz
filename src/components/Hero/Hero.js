import React from "react";
import {Container} from "../../globalStyles";
import {HeroHeader, HeroPhone, HeroSection, HeroText, HeroVideo,} from "./HeroStyles";
import {motion} from 'framer-motion'

const textAnimation = {
    hidden:{
        x:-100,
        opacity:0
    },
    visible:custom => ({
        x:0,
        opacity:1,
        transition:{delay:custom*0.6}
    }),
}

const PhoneAnim = {
    hidden: {
        y:100,
        opacity: 0,
    },
    visible:custom=>( {
        y:0,
        opacity: 1,
        transition:{delay:custom*0.6}
    })
}

const Hero = () => {
  return (
      <motion.section
          initial='hidden'
          whileInView='visible'
      >
    <HeroSection>
      <HeroVideo src="./assets/program.mp4" autoPlay loop muted />
      <Container>
        <HeroHeader custom={1} variants={textAnimation}>СОЗДАЕМ MVP <br/> СТРАТАПОВ </HeroHeader>
        <HeroText custom={2} variants={textAnimation}>
          Имеем опыт запуска собственных стартапов. Знаем, как сформулировать бизнес-гипотезу, разработать продукт с минимально необходимым функционалом, снять метрики и сделать правильные выводы.
        </HeroText>
      </Container>

        <HeroPhone custom={3} variants={PhoneAnim}>+43141241421421</HeroPhone>
    </HeroSection>
      </motion.section>
  );
};

export default Hero;
