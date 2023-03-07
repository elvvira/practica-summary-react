import { v4 } from 'uuid';

const summaryInfo = [
	{
		id: v4(),
		icon: '/images/icon-reaction.svg',
		title: 'Reaction',
		note: '80',
		color: '#FF5555',
		colorBg: 'rgba(255, 85, 85, 0.2)'
	},
	{
		id: v4(),
		icon: '/images/icon-memory.svg',
		title: 'Memory',
		note: '92',
		color: '#FFB21E',
		colorBg: 'rgba(255, 178, 30, 0.2)'
	},
	{
		id: v4(),
		icon: '/images/icon-verbal.svg',
		title: 'Verbal',
		note: '61',
		color: '#00BB8F',
		colorBg: 'rgba(0, 187, 143, 0.2)'
	},
	{
		id: v4(),
		icon: '/images/icon-visual.svg',
		title: 'Visual',
		note: '73',
		color: '#1125D6',
		colorBg: 'rgba(17, 37, 214, 0.2)'
	}
];

export { summaryInfo };
