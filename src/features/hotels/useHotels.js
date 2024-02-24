import { useQuery } from '@tanstack/react-query';
import { getHotels } from '../../services/apiHotels';

export function useHotels() {
	const {
		isLoading,
		data: hotels,
		error,
	} = useQuery({
		queryKey: ['hotels'],
		queryFn: getHotels,
	});

	return { isLoading, error, hotels };
}
