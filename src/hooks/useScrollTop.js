import { useEffect } from 'react';
import { useLocation } from 'react-router';

const useScrollTop = () => {
	// const { pathname } = useLocation();
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
		});
	}, []);

	return;
};

export default useScrollTop;
