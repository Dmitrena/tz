import styled from 'styled-components';
import { Button } from '../../globalStyles';
import { motion } from 'framer-motion';


export const HeroHeader = styled(motion.h1)`
	font-size: clamp(1.3rem, 4vw, 3.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#6775F1')};
	width: 100%;
	letter-spacing: 5px;
	text-align: left;
`;

export const HeroSection = styled.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`;

export const HeroText = styled(motion.p)`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: left;
	letter-spacing: 2px;
	color: #fff;
  width:50%;
  @media screen and (max-width:768px){
    width:70%
  }
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
	color: black;

	&:before {
		background: #fff;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: white;
	}
`;

export const HeroPhone = styled(motion.h3)`
  margin-top: 205px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: right;
  letter-spacing: 2px;
  color: #fff;
  width:91%;
  @media screen and (max-width:768px){
    width:70%
  }
`
