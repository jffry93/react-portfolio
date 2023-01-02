import styled from 'styled-components';
import SkillGridContainer from './SkillGridContainer';

const SkillsGrid = ({ skills }) => {
	const languageItems = skills.filter((skill) => {
		return skill.type === 'language';
	});
	const miscItems = skills.filter((skill) => {
		return skill.type === 'misc';
	});
	const backendItems = skills.filter((skill) => {
		return skill.type === 'backend';
	});
	const frontendItems = skills.filter((skill) => {
		return skill.type === 'frontend';
	});

	return (
		<StyledContainer>
			<StyledSkillsContainer>
				<SkillGridContainer heading={'Languages'} skills={languageItems} />
				<SkillGridContainer heading={'Frontend'} skills={frontendItems} />
				<SkillGridContainer heading={'Backend'} skills={backendItems} />
				<SkillGridContainer heading={'Misc.'} skills={miscItems} />
			</StyledSkillsContainer>
		</StyledContainer>
	);
};

export default SkillsGrid;

const StyledContainer = styled.div`
	position: relative;

	@media (max-width: 950px) {
		flex-direction: column;
		align-items: center;
		padding: 0px var(--layout-secondary-padding) 94px;
	}
	@media (max-width: 500px) {
		padding: 63px var(--layout-padding) 94px;
	}
`;

const StyledButtonContainer = styled.div`
	display: flex;

	button {
		flex: 1;
	}
`;

const StyledSkillsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	background-color: rgba(0, 0, 0, 0.15);
	border: 0.5px solid #eeeeee;
	border-radius: 20px;
	padding: 32px 16px;

	max-width: 780px;
	margin: auto;
`;
