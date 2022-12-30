import React from 'react';
import { BiError } from 'react-icons/bi';

const FormInput = ({
	legitCheck,
	formData,
	setFormData,
	title,
	errorMsg,
	placeholder,
	type = 'text',
	required = true,
}) => {
	const lowerTitle = title.toLowerCase();
	return (
		<div className='form-group'>
			{required ? (
				<label htmlFor={title}>
					{legitCheck[lowerTitle] ? (
						<div className='validation-popup'>
							<BiError size={15} />
							<p>{errorMsg}</p>
						</div>
					) : (
						<>
							<span>*</span>
							{title} <span className='required'>Required</span>
						</>
					)}
				</label>
			) : (
				<label className='not-required' htmlFor={title}>
					{title}
				</label>
			)}
			{type === 'area' ? (
				<textarea
					className={`${legitCheck[lowerTitle] ? 'validation-input' : ''}`}
					name='message'
					// required
					placeholder='There is no character limit'
					rows='5'
					value={formData[lowerTitle]}
					onChange={(e) => {
						setFormData({ ...formData, [lowerTitle]: e.target.value });
					}}
				/>
			) : (
				<input
					className={`${legitCheck[lowerTitle] ? 'validation-input' : ''}`}
					type={type}
					name={'user_' + lowerTitle}
					placeholder={placeholder}
					value={formData[lowerTitle]}
					onChange={(e) => {
						setFormData({ ...formData, [lowerTitle]: e.target.value });
					}}
				/>
			)}
		</div>
	);
};

export default FormInput;
