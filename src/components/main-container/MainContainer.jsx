import ResultContainer from '../result-container/ResultContainer';
import SummaryContainer from '../summary-container/SummaryContainer';
import { MainStyled } from './styles';

const MainContainer = () => {
	return (
		<MainStyled>
			<ResultContainer />
			<SummaryContainer />
		</MainStyled>
	);
};
export default MainContainer;
