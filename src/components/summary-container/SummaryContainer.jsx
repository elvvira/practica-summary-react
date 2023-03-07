import { summaryInfo } from '../../constants/summary';
import Bar from '../bar/Bar';
import { SummaryButton, SummaryStyled, SummaryTitle } from './styles';

const SummaryContainer = () => {
	return (
		<SummaryStyled>
			<SummaryTitle>Summary</SummaryTitle>
			{summaryInfo.map(card => {
				return <Bar key={card.id} {...card} />;
			})}

			<SummaryButton>Continue</SummaryButton>
		</SummaryStyled>
	);
};
export default SummaryContainer;
