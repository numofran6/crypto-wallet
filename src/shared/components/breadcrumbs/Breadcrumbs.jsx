import { NavLink } from 'react-router-dom';
import './Breadcrumbs.css';

export const Breadcrumbs = ({ menu = [] }) => {
	const navLinkStyle = ({ isActive }) => {
		if (isActive) {
			return {
				backgroundColor: '#aeb8c4',
				color: '#ffffff',
				padding: '0.3rem 0.8rem',
				borderRadius: '5rem',
			};
		}
	};

	return (
		<>
			<div className="breadcrumbs">
				{menu.map((value, i) => (
					<NavLink
						key={i}
						to={`/${value}`}
						style={navLinkStyle}
						className="breadcrumbs-menu"
					>
						{value}
					</NavLink>
				))}
			</div>
		</>
	);
};
