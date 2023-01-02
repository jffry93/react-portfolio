import styled from 'styled-components';
import GridItem from './GridItem';

const SkillGridContainer = ({ heading, skills }) => {
	return (
		<>
			<h4>{heading}</h4>
			<StyledDivider />
			<StyledGridContainer>
				{skills.map((skill) => {
					return <GridItem key={skill.title} skill={skill} />;
				})}
			</StyledGridContainer>
		</>
	);
};

export default SkillGridContainer;

const StyledGridContainer = styled.div`
	flex: 1;

	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(10rem, 100%), 1fr));
	gap: 12px;
	margin-bottom: 24px;
`;

const StyledDivider = styled.div`
	height: 1px;
	width: 100%;
	background-color: white;
`;
