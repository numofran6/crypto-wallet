import { useState } from 'react';
import './Breadcrumbs.css';
import { useBreadcrumbsContext } from '../../context/BreadcrumbsContext';

export const Breadcrumbs = ({ menuList = [] }) => {
	const { setBreadcrumbData } = useBreadcrumbsContext();
	const [activeIndex, setActiveIndex] = useState(null);

	const handleMenuClick = (index) => {
		const menuItem = menuList[index];
		setBreadcrumbData({
			lower: menuItem.lower,
			higher: menuItem.higher,
			btcConversion: menuItem.btcConversion,
			areaStroke: menuItem.areaStroke,
			areaFill: menuItem.areaFill,
		});
		setActiveIndex(index);
	};

	return (
		<>
			<div className="breadcrumbs">
				{menuList.map((menu, i) => (
					<button
						onClick={() => handleMenuClick(i)}
						key={i}
						className={`breadcrumbs-menu ${
							activeIndex === i ? 'active-menu' : ''
						}`}
					>
						{menu.title}
					</button>
				))}
			</div>
		</>
	);
};
