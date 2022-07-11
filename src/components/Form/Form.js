import React, {useState} from 'react';
import {FormButton, FormColumn, FormRow, FormSection, FormTitle, FormWrapper,} from './FormStyles';
import {Container} from '../../globalStyles';
import {Alert, Snackbar, TextField} from "@mui/material";
import axios from "axios";

const Form = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [question, setQuestion] = useState('');
	const TOKEN = "5516882396:AAGEVHwkEJVX2UbFC-uk0LF8iBmrcRZHL6k";
	const CHAT_ID = "-1001643949074";
	const URI_API = `https://api.telegram.org/bot5542567962:AAFXKFv976FbkouugXBRceog5URIY8DrPw8/sendMessage`;



	// const send = async (e) => {
	// 	e.preventDefault();
	// 	axios.post("http://localhost:5000/application",{name,phone,question})
	// 		.then((response) => {
	// 			console.log("response", response);
	// 			setName("");
	// 			setPhone("");
	// 			setQuestion('');
	// 		})
	// 		.catch((error) => console.log(error.response.data.message));
	// }

	const send = async (e) => {
		e.preventDefault();
		let message = `<b>Applic:</b>\n `;
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
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Your question</FormTitle>
						<FormWrapper onSubmit={send}>
							<TextField value={name} required id="name" label="Им'я" variant="standard" sx={{width: '100%'}}
									   onChange={(e) => setName(e.target.value)}/>
								<TextField value={phone} required id="phone" label="Номер телефона" variant="standard" sx={{width: '100%'}}
												onChange={(e) => setPhone(e.target.value)}/>
							<TextField value={question} required id="question" label="Вопрос" variant="standard" sx={{width: '100%'}} multiline rows={3}
									   onChange={(e) => setQuestion(e.target.value)}/>

							<FormButton type="submit">Отправить</FormButton>
						</FormWrapper>
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Form;