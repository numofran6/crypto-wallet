import { FaBell, FaCompass, FaWallet } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';
import './MainNav.css';

export const MainNav = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	const checkCurrentPath = ['/week', '/day', '/year', '/month'].includes(
		currentPath
	);

	const navLinkStyle = ({ isActive }) => {
		if (isActive) {
			return {
				color: '#4c5968',
			};
		} else {
			return {
				color: '#aeb8c4',
			};
		}
	};

	return (
		<div className="main-nav-container">
			<div className="main-nav-links">
				<NavLink to={'/'} style={navLinkStyle} className="hoveritem">
					<FaWallet
						className={`main-nav-icon ${checkCurrentPath && 'active-link'}`}
					/>
				</NavLink>

				<NavLink to={'/map'} style={navLinkStyle} className="hoveritem">
					<FaCompass className="main-nav-icon" />
				</NavLink>

				<NavLink
					to={'/notifications'}
					style={navLinkStyle}
					className="hoveritem"
				>
					<FaBell className="main-nav-icon" />
				</NavLink>

				<NavLink to={'/settings'} style={navLinkStyle} className="hoveritem">
					<IoIosSettings className="main-nav-icon" />
				</NavLink>
			</div>
		</div>
	);
};
