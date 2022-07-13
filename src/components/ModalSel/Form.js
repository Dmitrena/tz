import React, {useState} from "react";
import {
    FormButton,
    FormColumn,
    FormInput,
    FormInputRow,
    FormLabel,
    FormRow,
    FormSection,
    FormTitle,
    FormWrapper,
} from "../Forma/FormaStyles";
import {Container} from "../../globalStyles";
import axios from "axios";
import {FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";

const FormSel = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [gig, setGig] = React.useState('');



    const TOKEN = "5516882396:AAGEVHwkEJVX2UbFC-uk0LF8iBmrcRZHL6k";
    const CHAT_ID = "-1001643949074";
    const URI_API = `https://api.telegram.org/bot5542567962:AAFXKFv976FbkouugXBRceog5URIY8DrPw8/sendMessage`;



    const send = async (e) => {
        e.preventDefault();
        let message = `<b>Заказ:</b>\n `;
        message += `<b>Имя:</b> ${name}\n `;
        message += `<b>Фамилия:</b> ${surname}\n `;
        message += `<b>Тип гига:</b> ${gig}\n `;
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
            setGig('');
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setName("");
        setSurname("");
        setPhone('');
        setGig('');
    };



    const formData = [
        {
            label: "Им'я",
            value: name,
            onChange: (e) => setName(e.target.value),
            type: "text",
        },
        {
            label: "Фамилия",
            value: surname,
            onChange: (e) => setSurname(e.target.value),
            type: "phone",
        },
        {
            label: "Номер телефона",
            value: phone,
            onChange: (e) => setPhone(e.target.value),
        },
        {
            label: "Тип сайта",
            value: gig,
            onChange: (e) => setGig(e.target.value),
        },

    ];

    return (
        <FormSection>
            <Container>
                <FormRow>
                    <FormColumn>
                        <FormTitle>Заказать сайт</FormTitle>
                        <FormWrapper onSubmit={send}>
                                <FormInputRow >
                                    <TextField value={name} required id="name" label="Им'я" variant="standard" sx={{width: '100%'}}
                                               onChange={(e) => setName(e.target.value)}/>
                                    <TextField value={surname} required id="surname" label="Фамилия" variant="standard" sx={{width: '100%'}}
                                               onChange={(e) => setSurname(e.target.value)}/>
                                    <TextField value={phone} required id="phone" label="Номер телефона" variant="standard" sx={{width: '100%'}}
                                               onChange={(e) => setPhone(e.target.value)}/>
                                    <RadioGroup
                                        sx={{mt:3}}
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={gig}
                                        onChange={(e) => setGig(e.target.value)}							>
                                        <FormControlLabel value="1" control={<Radio />} label="Landing R" />
                                        <FormControlLabel value="2" control={<Radio />} label="lend" />
                                        <FormControlLabel value="3" control={<Radio />} label="Shop" />
                                        <FormControlLabel value="4" control={<Radio />} label="Shop R" />
                                    </RadioGroup>
                                </FormInputRow>

                            <FormButton type="submit">Отправить</FormButton>
                        </FormWrapper>
                    </FormColumn>
                </FormRow>
            </Container>
        </FormSection>
    );
};

export default FormSel;
