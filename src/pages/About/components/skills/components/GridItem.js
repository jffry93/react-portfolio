import styled from 'styled-components';
import { BsBook } from 'react-icons/bs';

const GridItem = ({ skill }) => {
	const { title, secondTitle, documentation, hexCode, hexCode2 } = skill;
	// console.log(skill);
	return (
		<StyledGridItem
			color={hexCode}
			color2={hexCode2}
			href={documentation}
			target='_blank'
			rel='noreferrer'
		>
			<StyledColumn>
				<StyledDiv>
					<h4>{title}</h4>
					<StyledCircle color={hexCode} color2={hexCode2} />
				</StyledDiv>
				<StyledTitle color={hexCode} color2={hexCode2}>
					{secondTitle}
				</StyledTitle>
			</StyledColumn>

			<StyledDoc>
				<BsBook />
				Docs
			</StyledDoc>
		</StyledGridItem>
	);
};

export default GridItem;

const StyledGridItem = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 4px;
	max-width: 200px;

	border-radius: 12px;
	padding: 12px;
	background-image: linear-gradient(135deg, var(--secondary-accent), #1c1c1c);
	text-decoration: unset;

	h4 {
		font-size: 16px;
		color: ${(props) => props.color2 || props.color};
	}
	&:hover {
		border: 1px solid ${(props) => props.color2 || props.color};

		cursor: pointer;
	}
`;
const StyledColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 8px;
`;
const StyledTitle = styled.h5`
	/* color: ${(props) => props.color2 || props.color}; */
	font-size: 14px;
`;

const StyledDoc = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	color: white;
`;

const StyledCircle = styled.div`
	height: 20px;
	width: 20px;
	border-radius: 50%;
	background-image: linear-gradient(
		155deg,
		${(props) => props.color2 || props.color},
		${(props) => props.color}
	);
`;
