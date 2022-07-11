export const data = [
	{
		title: 'Имя Фамилия',
		description:
			'Фронет енд разработчик',
		image: './assets/man.jpg',
	},
	{
		title: 'Имя Фамилия ',
		description: 'Бекендр разработчик',
		image: './assets/man.jpg',
	},
	{
		title: 'Имя Фамилия',
		description: 'Руководитель',
		image: './assets/man.jpg',
	},
	{
		title: 'Имя Фамилия',
		description: 'Заместитель',
		image: './assets/man.jpg',
	},
	{
		title: 'Имя Фамилия',
		description: 'Сооснователь',
		image: './assets/man.jpg',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
