import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useUser from '../features/authentication/useUser';
import Spinner from './Spinner';

const FullPage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 100vh;
	background-color: var(--color-grey-50);
`;

function ProtectedRoute({ children }) {
	const { isLoading, isAuthenticated } = useUser();

	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated && !isLoading) navigate('/login');
	}, [isAuthenticated, isLoading, navigate]);

	if (isLoading)
		return (
			<FullPage>
				<Spinner />
			</FullPage>
		);

	if (isAuthenticated) return children;
}
export default ProtectedRoute;
