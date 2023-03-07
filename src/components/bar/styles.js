import styled from 'styled-components';

const SummaryBar = styled.div`
	width: 100%;
	height: 45px;
	padding-left: 0.5rem;
	border-radius: 1rem;
	background-color: ${({ colorBg }) => colorBg};
	gap: 0.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
	padding-right: 1rem;
`;
const TitleBar = styled.p`
	color: ${({ color }) => color};
`;
const NoteBar = styled.div`
	margin-left: auto;
`;
const NoteBarSpan = styled.span`
	color: rgba(48, 59, 89, 0.5);
	font-weight: bold;
`;

export { SummaryBar, TitleBar, NoteBar, NoteBarSpan };
