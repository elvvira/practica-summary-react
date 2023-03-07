import styled from 'styled-components';

const MainStyled = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		width: 80%;

		margin-right: auto;
		margin-left: auto;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
`;
export { MainStyled };
