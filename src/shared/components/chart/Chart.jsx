import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs';
import { ChartCard } from './ChartCard';

export const Chart = () => {
	const data = [
		{
			name: 'Page A',
			uv: 900,
			pv: 1800,
			amt: 1800,
		},
		{
			name: 'Page B',
			uv: 1500,
			pv: 1398,
			amt: 1510,
		},
		{
			name: 'Page C',
			uv: 1800,
			pv: 9800,
			amt: 1390,
		},
		{
			name: 'Page D',
			uv: 1680,
			pv: 3908,
			amt: 2000,
		},
		{
			name: 'Page E',
			uv: 1390,
			pv: 4800,
			amt: 2181,
		},
		{
			name: 'Page F',
			uv: 1490,
			pv: 3800,
			amt: 2500,
		},
		{
			name: 'Page G',
			uv: 1590,
			pv: 4300,
			amt: 2100,
		},
	];

	return (
		<>
			<Breadcrumbs menu={['day', 'week', 'month', 'year']} />

			<ChartCard
				data={data}
				lower="4.895"
				higher="6.857"
				btcConversion="5.483"
			/>
		</>
	);
};
