import React, {useState} from 'react';
import {Container, Heading, TextWrapper} from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard, PricingButton,
} from './PricingStyles';
import { pricingData } from '../../data/PricingData';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	Modal,
	Radio,
	RadioGroup,
	TextField
} from "@mui/material";
import axios from "axios";
import {FormColumn, FormRow, FormSection, FormWrapper} from "../Form/FormStyles";
import ModalWindow from "../Modal/Modal";
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
					{/*<FormSection>*/}
					{/*	<Container>*/}
					{/*		<Grid container sx={{mt:-12}}>*/}

					{/*			<FormRow>*/}
					{/*			<FormColumn small>*/}
					{/*				<Typography sx={{color:"black"}} variant="h4">Оформить Заказ</Typography>*/}
					{/*				<form onSubmit={send}>*/}
					{/*	<TextField value={name} required id="name" label="Им'я" variant="standard" sx={{width: '100%'}}*/}
					{/*			   onChange={(e) => setName(e.target.value)}/>*/}
					{/*	<TextField value={surname} required id="surname" label="Фамилия" variant="standard" sx={{width: '100%'}}*/}
					{/*			   onChange={(e) => setSurname(e.target.value)}/>*/}
					{/*	<TextField value={phone} required id="phone" label="Номер телефона" variant="standard" sx={{width: '100%'}}*/}
					{/*			   onChange={(e) => setPhone(e.target.value)}/>*/}
					{/*		<RadioGroup*/}
					{/*			sx={{mt:3}}*/}
					{/*			aria-labelledby="demo-controlled-radio-buttons-group"*/}
					{/*			name="controlled-radio-buttons-group"*/}
					{/*			value={value}*/}
					{/*			onChange={(e) => setValue(e.target.value)}							>*/}
					{/*			<FormControlLabel value="1" control={<Radio />} label="Landing R" />*/}
					{/*			<FormControlLabel value="2" control={<Radio />} label="lend" />*/}
					{/*			<FormControlLabel value="3" control={<Radio />} label="Shop" />*/}
					{/*			<FormControlLabel value="4" control={<Radio />} label="Shop R" />*/}
					{/*		</RadioGroup>*/}
					{/*		<PricingButton type="submit">Заказать</PricingButton>*/}
					{/*	</form>*/}
					{/*			</FormColumn>*/}
					{/*		</FormRow>*/}
					{/*</Grid>*/}
					{/*	</Container>*/}
					{/*</FormSection>*/}
				</PricingWrapper>
			</PricingSection>
			<ModalSel showModal={showModal} toggleModal={toggleModal} />
		</IconContext.Provider>
	);
}
export default Pricing;
