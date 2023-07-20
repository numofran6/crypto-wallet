import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { GoDotFill } from 'react-icons/go';
import './Chart.css';

export const ChartCard = ({
	data,
	lower,
	higher,
	btcConversion,
	areaStroke,
	areaFill,
}) => {
	return (
		<div className="chart-container card-shadow">
			<div className="chart-title">
				<h1 className="align-horizaontal">
					<GoDotFill color="#F0325E" className="dot" /> Lower: ${lower}
				</h1>
				<h1 className="align-horizaontal">
					<GoDotFill color="#1EC070" className="dot" /> Higher: ${higher}
				</h1>
			</div>

			<ResponsiveContainer width="100%" height="60%">
				<AreaChart
					width={200}
					height={60}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<Area
						type="monotone"
						dataKey="uv"
						stroke={areaStroke}
						fill={areaFill}
					/>
				</AreaChart>
			</ResponsiveContainer>

			<div className="chart-crypto-conversion">
				<h4 className="align-horizaontal">
					<GoDotFill color="#FFAB3D" className="dot" /> 1 BTC = ${btcConversion}
				</h4>
			</div>
		</div>
	);
};
