import './BuySellCard.scss';
import { FaDollarSign } from 'react-icons/fa';

export const BuySellCard = ({ symbol }) => {
	return (
		<div className="buysellcard-container">
			<button className="buysellcard card-shadow">
				<div className="buysellcard-currency buy-color">
					<FaDollarSign className="w-5 h-5" />
				</div>

				<h2 className="buysellcard-title">Buy {symbol}</h2>
			</button>

			<button className="buysellcard card-shadow">
				<div className="buysellcard-currency sell-color">
					<FaDollarSign className="w-5 h-5" />
				</div>

				<h2 className="buysellcard-title">Sell {symbol}</h2>
			</button>
		</div>
	);
};
