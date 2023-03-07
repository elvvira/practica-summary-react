import styled from 'styled-components';

const ResultStyled = styled.div`
	width: 100vw;

	background-image: linear-gradient(#6943ff, #2f2ce9);
	border-bottom-left-radius: 2rem;
	border-bottom-right-radius: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	@media screen and (min-width: 768px) {
		border-radius: 50px;
	}
`;

const TitleResult = styled.p`
	margin-top: 0;
	padding: 2rem;
	color: #cac9ff;
	font-weight: bold;
`;

const ResultCircle = styled.div`
	width: 140px;
	height: 140px;
	border-radius: 50%;
	background-image: linear-gradient(#2f2ce9, #6943ff);
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const TitleCircle = styled.p`
	font-size: 2rem;
	margin-bottom: 0;
	font-weight: bold;
`;
const SubtitleCircle = styled.p`
	color: #cac9ff;
`;
const InfoContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 1rem;
`;
const DescriptionInfo = styled.p`
	color: #cac9ff;
	margin-top: 0;
`;
export {
	ResultStyled,
	TitleResult,
	ResultCircle,
	TitleCircle,
	SubtitleCircle,
	InfoContainer,
	DescriptionInfo
};
