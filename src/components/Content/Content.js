import React, {useEffect} from 'react';
import {Container, Section} from '../../globalStyles';
import {ContentColumn, ContentRow, Heading, Subtitle, TextWrapper, TopLine,} from './ContentStyles.js';

import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';

export const Content = ({
	primary,
	topLine,
	headline,
	description,
	description2,
	description3,
	description4,
	description5,
	buttonLabel,
	img,
	alt,
	inverse,
	reverse,
}) => {
	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);

	return (
		<Section inverse={inverse} ref={ref}>
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn>
						<TextWrapper>
							<TopLine
								initial={initial}
								transition={{ delay: 0.3, duration: 0.6 }}
								animate={animation}
							>
								{topLine.text}
							</TopLine>
							<Heading
								initial={initial}
								transition={{ delay: 0.5, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{headline}
							</Heading>


						</TextWrapper>
					</ContentColumn>
					<ContentColumn
						initial={initial}
						transition={{ delay: 0.5, duration: 0.6 }}
						animate={animation}
					>
						<Subtitle
							initial={initial}
							transition={{ delay: 0.7, duration: 0.6 }}
							animate={animation}
							inverse={inverse}
						>
							<div style={{marginBottom:'10px'}}>
							{description}
							</div>
							<br/>
							<div style={{marginBottom:'10px'}}>
							{description2}
							</div>
							<br/>
							<div style={{marginBottom:'10px'}}>
								{description3}
							</div>
							<br/>
							<div style={{marginBottom:'10px'}}>
								{description4}
							</div>
							<br/>
							<div style={{marginBottom:'10px'}}>
								{description5}
							</div>
						</Subtitle>
					</ContentColumn>
				</ContentRow>
			</Container>
		</Section>
	);
};
