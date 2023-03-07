import styled from 'styled-components';

const SummaryStyled = styled.div`
	width: 79%;
	margin-right: auto;
	margin-left: auto;
`;
const SummaryTitle = styled.h2`
	font-size: 1rem;
	color: #303b59;
`;
const SummaryBar = styled.div`
	width: 100%;
	height: 45px;
	padding-left: 0.5rem;
	border-radius: 1rem;
	background-color: rgba(255, 85, 85, 0.1);
	gap: 0.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
	padding-right: 1rem;
`;
const TitleBar = styled.p`
	color: red;
`;
const NoteBar = styled.div`
	margin-left: auto;
`;
const NoteBarSpan = styled.span`
	color: rgba(48, 59, 89, 0.5);
	font-weight: bold;
`;

const SummaryButton = styled.button`
	border: transparent;
	width: 100%;
	height: 50px;
	border-radius: 2rem;
	background-color: rgba(48, 59, 89, 1);
	color: white;
`;
export {
	SummaryStyled,
	SummaryTitle,
	SummaryBar,
	TitleBar,
	NoteBar,
	NoteBarSpan,
	SummaryButton
};
