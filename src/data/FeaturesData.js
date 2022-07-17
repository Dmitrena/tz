import React from 'react';

import { RiTeamLine } from 'react-icons/ri';
import { GiStairsGoal } from 'react-icons/gi';
import { BsCodeSlash } from 'react-icons/bs';
import { BiDollar } from 'react-icons/bi';
import { BsFillShieldLockFill  } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'ОДНА КОМАНДА',
		descriptionN:'ПОЛНОЕ ПОГРУЖЕНИЕ',
		description: 'Мы формируем команду спецалистов,необходимую для выполнения конкретного проекта с полным поогружением в тему и знанием всех деталей',
		icon: iconStyle(RiTeamLine),
		imgClass: 'one',
	},
	{
		name: 'ОДНА ЦЕЛЬ',
		descriptionN:'ПОНИМАНИЕ БИЗНЕС-ЗАДАЧ',
		description: 'Мы определяем бизнес-метрику,которую хотим улучшить,и выполняем задачу через призму ёё улучшение',
		icon: iconStyle(GiStairsGoal),
		imgClass: 'two',
	},
	{
		name: 'РАБОТАЕТ ПО 100% ПОСТОПЛАТЕ',
		descriptionN:'ОНЛАЙН-ОТЧЁТ С ДЕТАЛИЗАЦИЕЙ СТОИМОСТИ ЗАДАЧ',
		description: 'Вы платите столько,сколько используете.Без абонентской платы или иных обязательных платежей',
		icon: iconStyle(GiReceiveMoney),
		imgClass: 'three',
	},
	{
		name: 'ГАРАНТИРУЕМ СООТВЕТСТВИЕ ДЕЯТЕЛЬНОСТИ',
		descriptionN:'ТРЕБОВАНИЯМ ЗАКОНА',
		description: 'Передаём полные права на продукты (РИД* - результат интеллектуальной собственности)',
		icon: iconStyle(BsFillShieldLockFill ),
		imgClass: 'four',
	},
	{
		name: 'ЦЕНА/КАЧЕСТВО',
		description: 'Мы придерживаемся принципа - исполнимый бюджет: реализуем проекты при стабильно высоков качестве работ',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Поддерживаемый код',
		description:
			'Гибкий код не требующий объемных команд разработок',
		icon: iconStyle(BsCodeSlash),
		imgClass: 'six',
	},
];
