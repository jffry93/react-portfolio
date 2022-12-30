import { infoDetailData } from '../data/infoData';

const InfoDetail = () => {
	return infoDetailData.map((obj) => {
		const { text, url, icon } = obj;

		return (
			<div className='info-group'>
				<a href={url} target='_blank' rel='noreferrer'>
					{icon()}
				</a>
				<a href={url} target='_blank' rel='noreferrer'>
					<span>{text}</span>
				</a>
			</div>
		);
	});
};

export default InfoDetail;
