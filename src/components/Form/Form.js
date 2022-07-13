import React, {useState} from 'react';
import {FormButton, FormColumn, FormRow, FormSection, FormTitle, FormWrapper,} from './FormStyles';
import {Container} from '../../globalStyles';
import {Alert, Snackbar, TextField} from "@mui/material";
import axios from "axios";
import {FormInput, FormInputRow, FormLabel} from "../Forma/FormaStyles";

const Form = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [question, setQuestion] = useState('');
	const TOKEN = process.env.REACT_APP_TOKEN;
	const CHAT_ID = "-1001643949074";
	const URI_API = `https://api.telegram.org/bot5542567962:AAFXKFv976FbkouugXBRceog5URIY8DrPw8/sendMessage`;





	const send = async (e) => {
		e.preventDefault();
		let message = `<b>Заявка:</b>\n `;
		message += `<b>Sender:</b> ${name}\n `;
		message += `<b>Phone:</b> ${phone}\n `;
		message += `<b>Question:</b> ${question}\n `;
		console.log(message);

		axios.post(URI_API, {
			chat_id: CHAT_ID,
			parse_mode: "html",
			text: message,
		}).then((response)=>{
			console.log('response',response)
			setName("");
			setPhone("");
 			setQuestion('');
		});
	}
	const formData = [
		{
			label: "Им'я",
			value: name,
			onChange: (e) => setName(e.target.value),
			type: "text",
		},
		{
			label: "Номер Телефона",
			value: phone,
			onChange: (e) => setPhone(e.target.value),
			type: "phone",
		},
		{
			label: "Вам вопрос",
			value: question,
			onChange: (e) => setQuestion(e.target.value),
		},

	];
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn>
						<FormTitle>Безплатная консультация</FormTitle>
						<FormWrapper onSubmit={send}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label} *</FormLabel>
									<FormInput required value={el.value} onChange={el.onChange} />
								</FormInputRow>
							))}

							<FormButton type="submit">Отправить</FormButton>
						</FormWrapper>
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Form;