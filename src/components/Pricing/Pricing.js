import React, {useState} from 'react';
import {Heading, TextWrapper} from '../../globalStyles';
import {IconContext} from 'react-icons/lib';
import {
	PricingButton,
	PricingCard,
	PricingCardCost,
	PricingCardFeature,
	PricingCardFeatures,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardText,
	PricingContainer,
	PricingSection,
	PricingWrapper,
} from './PricingStyles';
import {pricingData} from '../../data/PricingData';
import axios from "axios";
import ModalSel from "../ModalSel/ModalSel";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

function Pricing() {
	const [showModal, setShowModal] = useState(false);
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [phone, setPhone] = useState('');
	const [value, setValue] = React.useState('');

	const toggleModal = () => {
		if (!showModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}

		setShowModal(!showModal);
	};


	const TOKEN = "5516882396:AAGEVHwkEJVX2UbFC-uk0LF8iBmrcRZHL6k";
	const CHAT_ID = "-1001643949074";
	const URI_API = `https://api.telegram.org/bot5542567962:AAFXKFv976FbkouugXBRceog5URIY8DrPw8/sendMessage`;



	const send = async (e) => {
		e.preventDefault();
		let message = `<b>Заказ:</b>\n `;
		message += `<b>Имя:</b> ${name}\n `;
		message += `<b>Фамилия:</b> ${surname}\n `;
		message += `<b>Тип гига:</b> ${value}\n `;
		console.log(message);

		axios.post(URI_API, {
			chat_id: CHAT_ID,
			parse_mode: "html",
			text: message,
		}).then((response)=>{
			console.log('response',response)
			setName("");
			setSurname("");
			setPhone('');
			setValue('');
		});
	}

	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<Heading>Тариф</Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						Доверьтесь профессионалам
					</TextWrapper>
					<PricingContainer>
						{pricingData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.description}</PricingCardText>
									<PricingCardFeatures>
										{card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}
											</PricingCardFeature>
										))}
									</PricingCardFeatures>
								</PricingCardInfo>
							</PricingCard>
						))}

					</PricingContainer>
						<PricingButton onClick={toggleModal}>Заказать</PricingButton>

				</PricingWrapper>
			</PricingSection>
			<ModalSel showModal={showModal} toggleModal={toggleModal} />
		</IconContext.Provider>
	);
}
export default Pricing;
