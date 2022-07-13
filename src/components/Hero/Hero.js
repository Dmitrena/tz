import React, {useEffect, useState} from "react";
import {Container} from "../../globalStyles";
import {
    ButtonContainer,
    ButtonWrapper,
    HeroButton, HeroButtonBig, HeroButtonContainer, HeroButtonWrapper,
    HeroHeader,
    HeroPhone,
    HeroSection,
    HeroText,
    HeroVideo,
} from "./HeroStyles";
import {motion} from 'framer-motion'
import {useInView} from "react-intersection-observer";
import ModalWindow from "../Modal/Modal";
import {FiMail} from "react-icons/fi";

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
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        if (!showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        setShowModal(!showModal);
    };

    const variants = {
        hover: {
            y: 15,
            transition: {
                yoyo: Infinity,
                duration: 0.6,
            },
        },
    };
    const { ref, inView } = useInView({
        rootMargin: '-100px',
    });

    useEffect(() => {
        console.log(inView);
    }, [inView]);
  return (
      <motion.section
          initial='hidden'
          whileInView='visible'
      >
    <HeroSection>
      <HeroVideo src="./assets/program.mp4" autoPlay loop muted />
      <Container>
        <HeroHeader custom={1} variants={textAnimation}>СОЗДАЕМ MVP ДЛЯ <br/> СТРАТАПОВ </HeroHeader>
        <HeroText custom={2} variants={textAnimation}>
          Знаем, как сформулировать бизнес-гипотезу, разработать продукт с минимально необходимым функционалом, снять метрики и сделать правильные выводы.
        </HeroText>
      </Container>

        <HeroButtonContainer ref={ref}>
            <HeroButtonWrapper>
                <HeroButtonBig onClick={toggleModal} className={inView ? '' : 'corner'}>
                    {inView ? (
                        <> Безплатная консультация</>
                    ) : (
                        <FiMail color="white" size="2.3rem" style={{position:'relative',zIndex:'50'}}/>
                    )}
                </HeroButtonBig>
            </HeroButtonWrapper>
        </HeroButtonContainer>

        <HeroPhone custom={3} variants={PhoneAnim}>+7 985 522 0 999</HeroPhone>
    </HeroSection>
          <ModalWindow showModal={showModal} toggleModal={toggleModal} />
      </motion.section>
  );
};

export default Hero;
