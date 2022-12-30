import React from 'react';
import Toggle from './Toggle';
import { questionAnswer } from './data/questionAnswer';

const MoreInfo = () => {
	return questionAnswer.map((obj) => {
		const { title, children } = obj;

		return (
			<Toggle key={title} title={title}>
				<div className='answer'>{children()}</div>
			</Toggle>
		);
	});
};

export default MoreInfo;
