import React, {useEffect, useState} from "react";
import {Container} from "../../globalStyles";
import {
    HeroButtonBig,
    HeroButtonContainer,
    HeroButtonWrapper,
    HeroHeader,
    HeroPhone,
    HeroSection, HeroString,
    HeroText,
    HeroVideo,
} from "./HeroStyles";
import {motion} from 'framer-motion'
import {useInView} from "react-intersection-observer";
import ModalWindow from "../Modal/Modal";
import {FiMail} from "react-icons/fi";
import Marquee from "react-double-marquee/dist/bundle.esm";

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
      <HeroVideo src="./assets/BackGround.mp4" autoPlay loop muted />
      <Container>
        <HeroHeader custom={1} variants={textAnimation}>СОЗДАЁМ ОНЛАЙН СЕРВИСЫ  <br/> И ПРИЛОЖЕНИЯ </HeroHeader>
        <HeroText custom={2} variants={textAnimation}>
            Для стартапов, зрелых компании и любого кто хочет:
        </HeroText>
          <HeroText custom={3} variants={textAnimation}>
              * Проверяем бизнес-гипотезы с помощью лэндинга, поможем с дизайном и разработкой, трафиком и выводами.
              * Разрабатываем MVP (продукт с минимально необходимым функционалом) с обратной связью от целевой аудитории.
              * Создаём новые функции и гибкие, легко поддерживаемые, высоконагруженные сервисы "ПОД КЛЮЧ".
          </HeroText>


        <HeroButtonContainer ref={ref}>
            <HeroButtonWrapper>
                <HeroButtonBig onClick={toggleModal} className={inView ? '' : 'corner'}>
                    {inView ? (
                        <> Бесплатная консультация</>
                    ) : (
                        <FiMail color="white" size="2.3rem" style={{position:'relative',zIndex:'50'}}/>
                    )}
                </HeroButtonBig>
            </HeroButtonWrapper>
        </HeroButtonContainer>



        <HeroPhone custom={3} variants={PhoneAnim}>+7 985 522 0 999</HeroPhone>
        <HeroString
            style={{
                width: '600px',
                whiteSpace: 'nowrap',
                color: 'white'
            }}
        >
            <Marquee>
                Технологии последнего поколения React, Directual, Figma.
            </Marquee>
        </HeroString>
      </Container>

    </HeroSection>
          <ModalWindow showModal={showModal} toggleModal={toggleModal} />
      </motion.section>
  );
};

export default Hero;
