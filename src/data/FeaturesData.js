import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Конфиденциальность',
		description: 'Мы предоставляем нашим клиентам конфиденциальность',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'С нами легко сотрудничать',
		description: 'Наша команда открыта для новых сотрудничеств',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Поддерживаемый код',
		description: 'Наш код написан с использованием самых передовых технологий',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: '24/7 Поддержка клиента',
		description: 'Наша команда предоставит клиенту поддержку в любое время',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Цены',
		description: 'Мы предлагаем за небольшие деньги хорошее качество',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Запустим сервер',
		description:
			'Загрузим сервер на хостинг и привяжем к домену',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
