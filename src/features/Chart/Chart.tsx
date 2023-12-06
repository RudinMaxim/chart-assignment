import { useState } from 'react';
import { useGetChartDataQuery } from '../../api/ChartApi';
import { DEFAULT_COLOR_RULES } from '../../lib/constants';
import { Histogram, Loader } from '../../components/index';

export default function Chart(): React.JSX.Element {
	const { data, isLoading, isSuccess, error } = useGetChartDataQuery();

	if (isLoading) {
		return <Loader />;
	}
	console.log(data);

	if (error) {
		console.log(error);
	}

	return (
		<section>
			{isSuccess &&
				data.map((item) => (
					<div key={item.label}>
						<Histogram label={item.label} values={item.values} />
					</div>
				))}
		</section>
	);
}
