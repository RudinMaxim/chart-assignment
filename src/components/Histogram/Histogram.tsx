import { ColorRule, Data } from '../../lib/type';
import { Bar } from 'react-chartjs-2';
import { labels } from '../../lib/constants';
import { DEFAULT_COLOR_RULES } from '../../lib/constants';
import { colorRules } from '../../lib/helper';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const Histogram = ({ label, values }: Data) => {
	const rules = DEFAULT_COLOR_RULES;

	const getBarColor = (value: number[], index: number) => {
		value.map((el) => {
			console.log(el);
		});

		return 'gray';
	};

	const data = {
		labels,
		datasets: [
			{
				label: label,
				data: [...values],
				backgroundColor: [
					getBarColor(values, 1),
					getBarColor(values, 2),
					getBarColor(values, 3),
					getBarColor(values, 4),
					getBarColor(values, 5),
				],
			},
		],
	};

	return (
		<div className='histogram'>
			<Bar data={data} />
		</div>
	);
};
