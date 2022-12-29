import { BsGithub } from 'react-icons/bs';
import { SiIndeed } from 'react-icons/si';

import { RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineFileText } from 'react-icons/ai';
import MyResume from '../../../assets/resume/Jeffrey_Zalischi_Resume.pdf';

export const iconData = [
	{
		icon: () => (
			<a href='https://github.com/jffry93' className='github' rel='noreferrer'>
				<BsGithub size={22} className='github-icon' />
			</a>
		),
	},
	{
		anchorInfo: 'https://www.linkedin.com/in/jffry93/',
		icon: () => (
			<a
				href='https://www.linkedin.com/in/jffry93/'
				className='linkedin'
				rel='noreferrer'
			>
				<RiLinkedinFill size={22} className='linkedin-icon' />
			</a>
		),
	},
	{
		anchorInfo: 'https://my.indeed.com/p/jeffreyz-n48gpy7',
		icon: () => (
			<a className='indeed' href='https://my.indeed.com/p/jeffreyz-n48gpy7'>
				<SiIndeed size={22} className='indeed-icon' />
			</a>
		),
	},
	{
		anchorInfo: `href=${MyResume} download='Jeffrey_Zalischi_Resume`,
		icon: () => (
			<a className='resume' href={MyResume} download='Jeffrey_Zalischi_Resume'>
				<AiOutlineFileText size={22} className='resume-icon' />
			</a>
		),
	},
];

// 			<div className='icon-container'>
// 				<a
// 					className='resume'
// 					href={MyResume}
// 					download='Jeffrey_Zalischi_Resume'
// 					target='_blank'
// 				>
// 					<AiOutlineFileText size={22} className='resume-icon' />
// 				</a>
// 			</div>
