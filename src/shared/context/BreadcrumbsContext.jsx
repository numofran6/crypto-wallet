import { createContext, useContext, useState } from 'react';
import { menuList } from '../utlis/data';

const BreadcrumbsContext = createContext();

export const useBreadcrumbsContext = () => useContext(BreadcrumbsContext);

export const BreadcrumbsProvider = ({ children }) => {
	const [breadcrumbData, setBreadcrumbData] = useState({
		lower: menuList[1].lower,
		higher: menuList[1].higher,
		btcConversion: menuList[1].btcConversion,
		areaStroke: menuList[1].areaStroke,
		areaFill: menuList[1].areaFill,
	});

	return (
		<BreadcrumbsContext.Provider value={{ breadcrumbData, setBreadcrumbData }}>
			{children}
		</BreadcrumbsContext.Provider>
	);
};
