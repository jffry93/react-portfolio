import React from 'react';

import { iconData } from './data/iconData';

const Icons = () => {
	return iconData.map((data) => {
		return <div className='icon-container'>{data.icon()}</div>;
	});
};

export default Icons;
