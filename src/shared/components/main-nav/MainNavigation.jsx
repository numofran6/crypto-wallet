import { FaBell, FaCompass, FaWallet } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import './MainNavigation.scss';

export const MainNavigation = () => {
	return (
		<div className="main-nav-container">
			<div className="main-nav-links">
				<a href="#" className="hoveritem">
					<FaWallet className={'main-nav-icon active-link'} />
				</a>

				<a href="#" className="hoveritem">
					<FaCompass className="main-nav-icon" />
				</a>

				<a href="#" className="hoveritem">
					<FaBell className="main-nav-icon" />
				</a>

				<a href="#" className="hoveritem">
					<IoIosSettings className="main-nav-icon" />
				</a>
			</div>
		</div>
	);
};
