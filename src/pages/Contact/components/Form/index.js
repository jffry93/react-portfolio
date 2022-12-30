import React from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';

const Form = ({ legitCheck, formData, setFormData }) => {
	const inputData = [
		{
			title: 'Name',
			errorMsg: 'New phone who dis?',
			placeholder: 'Enter Name or Alias',
			name: 'user_name',
		},
		{
			title: 'Email',
			errorMsg: "I won't send you spam",
			placeholder: 'Enter a valid email address',
			type: 'email',
			name: 'user_email',
		},
		{
			title: 'Subject',
			placeholder: 'Enter brief description',
			required: false,
			name: 'user_subject',
		},
		{
			title: 'Message',
			errorMsg: 'Use those fingers',
			placeholder: 'There is no character limit',
			type: 'area',
			name: 'message',
		},
	];

	return inputData.map((object) => {
		console.log(object);
		return (
			<FormInput
				key={object.title}
				legitCheck={legitCheck}
				formData={formData}
				setFormData={setFormData}
				{...object}
			/>
		);
	});
};

export default Form;
