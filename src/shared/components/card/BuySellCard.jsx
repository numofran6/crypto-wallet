import { BiSolidDollarCircle } from 'react-icons/bi';
import './BuySellCard.css';

export const BuySellCard = ({ symbol }) => {
	return (
		<div className="buysellcard-container">
			<button className="buysellcard card-shadow">
				<BiSolidDollarCircle color="#1aa0f7" className="buysellcard-currency" />

				<h2 className="buysellcard-title">Buy {symbol}</h2>
			</button>

			<button className="buysellcard card-shadow">
				<BiSolidDollarCircle color="#fc3b95" className="buysellcard-currency" />

				<h2 className="buysellcard-title">Sell {symbol}</h2>
			</button>
		</div>
	);
};
