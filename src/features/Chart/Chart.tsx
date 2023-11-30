import { Histogram, Loader } from '../../components/index';
import { useGetChartDataQuery } from '../../api/ChartApi';

export default function Chart(): React.JSX.Element {
	const { data, isLoading, isSuccess, error } = useGetChartDataQuery();

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		console.log(error);
	}

	return (
		<section>
			<h1>Chart List</h1>
			{isSuccess &&
				data.map((item) => (
					<Histogram key={item.label} label={item.label} values={item.values} />
				))}
		</section>
	);
}
