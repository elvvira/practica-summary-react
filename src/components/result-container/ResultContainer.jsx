import {
	DescriptionInfo,
	InfoContainer,
	ResultCircle,
	ResultStyled,
	SubtitleCircle,
	TitleCircle,
	TitleResult
} from './styles';

const ResultContainer = () => {
	return (
		<ResultStyled>
			<TitleResult>Your Result</TitleResult>
			<ResultCircle>
				<TitleCircle>76</TitleCircle>
				<SubtitleCircle>of 100</SubtitleCircle>
			</ResultCircle>
			<InfoContainer>
				<h1>Great</h1>
				<DescriptionInfo>
					Your performance exceed 65% of the people conducting the test here!
				</DescriptionInfo>
			</InfoContainer>
		</ResultStyled>
	);
};
export default ResultContainer;
