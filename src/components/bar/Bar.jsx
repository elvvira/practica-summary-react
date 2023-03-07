import { NoteBar, NoteBarSpan, SummaryBar, TitleBar } from './styles';

const Bar = ({ icon, title, note, color, colorBg }) => {
	return (
		<SummaryBar colorBg={colorBg}>
			<img src={icon} alt='' />
			<TitleBar color={color}>{title}</TitleBar>
			<NoteBar>
				{note} <NoteBarSpan>/ 100</NoteBarSpan>
			</NoteBar>
		</SummaryBar>
	);
};

export default Bar;
