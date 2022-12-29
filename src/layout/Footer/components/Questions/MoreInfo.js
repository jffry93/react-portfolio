import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import Toggle from './Toggle';
import { questionAnswer } from './data/questionAnswer';

const MoreInfo = () => {
	const info = questionAnswer.map((obj) => {
		const { title, children } = obj;
		console.log(obj);
		return (
			<Toggle title={title}>
				<div className='answer'>{children()}</div>
			</Toggle>
		);
	});
	return info;
};

export default MoreInfo;
