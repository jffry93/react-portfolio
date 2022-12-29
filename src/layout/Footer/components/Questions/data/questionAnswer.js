import { NavHashLink } from 'react-router-hash-link';

import { StyledRow } from '../../../../../lib/styled-components/Styles';

export const questionAnswer = [
	{
		title: 'How Do I Start?',
		children: () => (
			<>
				<p>
					I am always looking for the next exciting project. Once you know what
					needs to be built we can start right away.
				</p>

				<StyledRow>
					<NavHashLink href='#' to='/contact'>
						Click Here
					</NavHashLink>
					to get in contact with me.
				</StyledRow>
			</>
		),
	},
	{
		title: 'Daily Schedule',
		children: () => (
			<>
				<p>Available Monday - Friday anytime between 9AM - 5PM EST.</p>

				<span>#WorkLifeBalance </span>
			</>
		),
	},
	{
		title: 'Why Did You Choose Web Development?',
		children: () => (
			<>
				<p>
					We live in such an exciting time where there is no shortage of
					technology. If you can think it, it can be built.
				</p>

				<p>The only limitation is your imagination.</p>
			</>
		),
	},
	{
		title: 'What Have You Built?',
		children: () => (
			<>
				<p>Anything related to the web and more! </p>
				<p>
					From translating designs into web applications, to interacting with
					APIs and building modern reusable scalable components. I've built
					e-commerce sites, professional portfolios, multiple applications and
					much more.
				</p>
				<br />
				<StyledRow>
					Check out my{' '}
					<a
						href='https://github.com/jffry93'
						className='github-link'
						target='_blank'
						rel='noreferrer'
					>
						Github
					</a>{' '}
					to see all my project and recent work!
				</StyledRow>
			</>
		),
	},
];
