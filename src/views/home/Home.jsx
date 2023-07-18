import { BuySellCard, CryptoCard } from '../../shared/components';
import { SiBitcoinsv } from 'react-icons/si';
import { Outlet } from 'react-router-dom';
import './Home.css';

export const Home = () => {
	return (
		<>
			<main>
				<CryptoCard
					sign={<SiBitcoinsv className="cryptocard-sign" />}
					name="Bitcoin"
					symbol="BTC"
					amount="3.529020"
					dollarValue="$19.153"
					percent={'- 2.32'}
				/>

				<Outlet />

				<BuySellCard symbol={'BTC'} />
			</main>
		</>
	);
};
