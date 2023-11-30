import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Data {
	label: string;
	values: number[];
}

export const ChartApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3500',
		prepareHeaders: (headers) => {
			headers.set('Cache-Control', 'no-cache');
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getChartData: builder.query<Array<Data>, void>({
			query: () => ({ url: '/data', method: 'GET' }),
		}),
	}),
});

export const { useGetChartDataQuery } = ChartApi;
