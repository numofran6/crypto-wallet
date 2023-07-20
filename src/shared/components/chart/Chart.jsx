import { useState } from 'react';
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs';
import { ChartCard } from './ChartCard';
import { useBreadcrumbsContext } from '../../context/BreadcrumbsContext';
export const menuList = [
	{
		title: 'day',
		lower: '3.895',
		higher: '7.857',
		btcConversion: '1.483',
		areaStroke: '#ff503d',
		areaFill: '#ffeeee',
	},
	{
		title: 'week',
		lower: '4.895',
		higher: '6.857',
		btcConversion: '5.483',
		areaStroke: '#3dff3d',
		areaFill: '#efffee',
	},
	{
		title: 'month',
		lower: '2.895',
		higher: '4.857',
		btcConversion: '8.483',
		areaStroke: '#3daeff',
		areaFill: '#eef9ff',
	},
	{
		title: 'year',
		lower: '6.895',
		higher: '10.857',
		btcConversion: '11.483',
		areaStroke: '#ff3ddb',
		areaFill: '#ffeefd',
	},
];

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

	const { breadcrumbData } = useBreadcrumbsContext();
	const { lower, higher, btcConversion, areaFill, areaStroke } = breadcrumbData;

	return (
		<>
			<Breadcrumbs {...{ menuList }} />

			<ChartCard {...{ lower, higher, btcConversion, areaFill, areaStroke }} />
		</>
	);
};
