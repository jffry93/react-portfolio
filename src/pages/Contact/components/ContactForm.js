import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ContactInfo from './ContactInfo';
import Form from './Form';

const ContactForm = ({ formValidation, setFormValidation }) => {
	const [legitCheck, setLegitCheck] = useState({
		name: false,
		email: false,
		message: false,
	});
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const validateForm = () => {
		const legitObject = { ...legitCheck };

		//NAME
		if (formData.name === '') {
			legitObject.name = true;
		} else {
			legitObject.name = false;
		}
		//EMAIL
		if (
			formData.email
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
		) {
			legitObject.email = false;
		} else {
			legitObject.email = true;
		}
		//MESSAGE
		if (formData.message === '') {
			legitObject.message = true;
		} else {
			legitObject.message = false;
		}

		setLegitCheck(legitObject);
		return Object.values(legitObject).every((item) => {
			return item === false;
		});
	};

	const sendEmail = async (e) => {
		try {
			e.preventDefault();
			if (validateForm()) {
				const response = await emailjs.sendForm(
					'service_wm8y8eo',
					'template_8mqb8d4',
					e.target,
					'user_l63HFouUVaxbBVgQdO1Td'
				);
				if (response.text === 'OK') {
					setFormValidation(true);
					setFormData({
						name: '',
						email: '',
						message: '',
						subject: '',
					});
					e.target.reset();
				} else {
					console.log(response.text);
				}
			} else {
				console.log('some inputs need to be filled');
			}
		} catch (err) {
			console.log('unable to send data to email js');
		}
	};

	return (
		<StyledFormContainer>
			<StyledContactForm>
				<StyledForm onSubmit={sendEmail} action=''>
					<h1>Let's Chat!</h1>
					<div className='contact-description'>
						<p>
							Please use this form to contact me and I will get back to you
							ASAP!
						</p>
					</div>
					<Form
						legitCheck={legitCheck}
						formData={formData}
						setFormData={setFormData}
					/>

					<div className='form-group submit-group '>
						<input
							onClick={validateForm}
							type='submit'
							value='Send'
							id='submit-button'
						/>
					</div>
				</StyledForm>
			</StyledContactForm>
			<ContactInfo />
		</StyledFormContainer>
	);
};

export default ContactForm;

const StyledFormContainer = styled(motion.div)`
	flex: 1.5;
	display: flex;
	align-items: center;
	gap: 60px;

	min-height: var(--container-height);

	padding: 16px 60px;
	@media (max-width: 1050px) {
		flex-direction: column;
		padding: 4rem;
	}
	@media (max-width: 700px) {
		min-height: unset;
		padding: 4rem 22px 32px;
	}

	@media (max-width: 450px) {
		flex-direction: column;
		/* padding: 4rem 22px; */
	}
`;
const StyledContactForm = styled.div`
	/* height: calc(90vh - 10rem); */
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	flex: 1.5;

	h1 {
		/* font-size: 2.4rem; */
		white-space: nowrap;
	}
	.contact-description {
		/* max-width: 250px; */
	}
	@media (max-width: 1050px) {
		justify-content: flex-end;
	}
`;

const StyledForm = styled.form`
	height: 100%;
	max-width: 350px;
	@media (max-width: 1050px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: unset;
	}
	@media (max-width: 700px) {
	}
	p {
		margin: 8px 0 16px;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 8px 0 0;
		color: white; /* font-size: 1.5rem; */
		label {
			font-weight: 600;
			font-size: 0.9rem;
		}

		span {
			color: var(--primary-accent);
			margin-right: 0.7rem;
			font-size: 0.9rem;
		}
		.required {
			margin-left: 2rem;
			color: var(--primary-accent);
		}
		.not-required {
			margin-left: 1.175rem;
		}
		.validation-popup {
			display: flex;
			align-items: center;

			gap: 1rem;
			/* margin-top: 0.5rem;
      margin-left: 1rem; */

			border-radius: 8px;

			color: #f0544f; /* background-color: red; */
			/* span {
        color: white;
        margin-left: 1rem;
        font-weight: 600;
      } */
			p {
				margin: 0;
				font-weight: 500;
				color: #f0544f;
				font-size: 0.9rem;
			}
		}
		.validation-input {
			outline: 1px solid #f0544f;
			outline-offset: -4px;
		}
	}
	.submit-group {
		margin: 4px 0;
		/* padding: 0.7rem 1rem; */
		background-color: #e6e5e5;
		border-radius: 3px;
		input {
			color: grey;
			background-color: var(--primary-text-color);
		}
	}

	input,
	textarea {
		width: 100%;
		padding: 0.7rem 1rem;

		border-radius: 3px;
		/* font-size: 1.5rem; */
		border: 1px solid #6d6d6d;
		margin-top: 5px; //LINE GAP INPUT AND LABEL
	}
	textarea {
		border-radius: 3px;
		resize: vertical;
	}
	/* button[type='submit'] {
    width: 100%;
    border: none;
    outline: none;
    padding: 20px;
    border-radius: 8px;
    background-color: black;
  } */
	#submit-button {
		width: 100%;
		border: none;
		outline: none;
		padding: 0;
		margin: 0;
		height: 38px;
		cursor: pointer;

		border-radius: 3px;
		background-color: #e6e5e5;
	}
	#submit-button:hover {
		background-color: #bcbcbc;
		border-radius: 3px;
	}
`;
