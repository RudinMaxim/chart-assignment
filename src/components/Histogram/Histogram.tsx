import { Bar } from 'react-chartjs-2';
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

const labels = [1, 2, 3, 4, 5];

interface IHistogram {
	label: string;
	values: number[];
}
export const Histogram = ({ label, values }: IHistogram) => {
	const data = {
		labels,
		datasets: [
			{
				label: label,
				data: values,
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};

	return (
		<div className='histogram'>
			<Bar data={data} />;
		</div>
	);
};
