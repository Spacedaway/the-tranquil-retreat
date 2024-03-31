import { HiArrowRightOnRectangle } from 'react-icons/hi2';

import ButtonIcon from '../../ui/ButtonIcon';
import SpinnerMini from '../../ui/SpinnerMini';
import { useLogout } from './useLogout';

function LogOut() {
	const { isLoading, logout } = useLogout();

	return (
		<ButtonIcon disabled={isLoading} onClick={logout}>
			{isLoading ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
		</ButtonIcon>
	);
}
export default LogOut;
