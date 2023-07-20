import { useState } from 'react';
import { useBreadcrumbsContext } from '../../context/BreadcrumbsContext';
import './Breadcrumbs.css';

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
						className="breadcrumbs-menu"
						style={
							activeIndex === i
								? {
										backgroundColor: '#aeb8c4',
										color: '#ffffff',
										padding: '0.3rem 0.8rem',
										borderRadius: '5rem',
								  }
								: { padding: '0.3rem 0.8rem' }
						}
					>
						{menu.title}
					</button>
				))}
			</div>
		</>
	);
};
