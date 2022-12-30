import styled from 'styled-components';
import Signature from '../../../assets/img/icons/white-sig.png';
import { StyledCenterRow } from '../../../lib/styled-components/Styles';

const CreatedBy = () => {
	return (
		<StyledCreated>
			<p>Created by</p>
			<a className='github-link' href='https://github.com/jffry93'>
				<img src={Signature} alt='Signature' />
			</a>
		</StyledCreated>
	);
};

export default CreatedBy;

const StyledCreated = styled(StyledCenterRow)`
	padding: 8px 0;
`;
