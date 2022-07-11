import React from 'react';
import {Content} from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import {heroOne, heroThree, heroTwo} from '../data/HeroData';
import SimpleAccordion, {Accordion} from "../components/Accordion/Accord";
import Carousel from "../components/Carousel/Carousel";
import {Crok} from "../components/Steps/Steps";


const Home = () => {
	return (
		<>
			<Hero />
			<Crok/>
			<Features />
			{/*<Content {...heroOne} />*/}
			<Content {...heroTwo} />
			{/*<Content {...heroThree} />*/}
			<SimpleAccordion />
			<Carousel/>
		</>
	);
};

export default Home;
