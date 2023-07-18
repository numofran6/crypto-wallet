import { BsChevronCompactDown } from 'react-icons/bs';
import { BuySellCard } from './BuySellCard';
import { useState } from 'react';
import './CryptoCard.css';

export const CryptoCard = ({
	sign,
	name,
	symbol,
	amount,
	dollarValue,
	percent,
}) => {
	const [openBuySell, setOpenBuySell] = useState(false);

	return (
		<div className="cryptocard-container card-shadow">
			<div className="cryptocard-heading">
				<div className="cryptocard-title">
					{sign}
					<h1>{name}</h1>
				</div>

				<h6 className="cryptocard-subtitle">{symbol}</h6>
			</div>

			<h2 className="cryptocard-amount">
				{amount} {symbol}
			</h2>

			<div className="cryptocard-value-percent">
				<h3 className="cryptocard-dollar-value">{dollarValue} USD</h3>

				<h6 className="cryptocard-percent">{percent}%</h6>
			</div>

			<div className="cryptocard-dropdown-container">
				<button
					onClick={() => setOpenBuySell(!openBuySell)}
					className="hoveritem"
				>
					<BsChevronCompactDown
						className={`cryptocard-dropdown-icon ${
							openBuySell && 'rotate-cryptocard-dropdown-icon'
						}`}
					/>
				</button>
			</div>

			{openBuySell && (
				<div className="cryptocard-actions">
					<BuySellCard symbol={symbol} />
				</div>
			)}
		</div>
	);
};
