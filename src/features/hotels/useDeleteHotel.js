import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteHotel as deleteHotelApi } from '../../services/apiHotels';

export function useDeleteHotel() {
	const queryClient = useQueryClient();

	const { isLoading: isDeleting, mutate: deleteHotel } = useMutation({
		mutationFn: deleteHotelApi,
		onSuccess: () => {
			toast.success('Hotel successfully deleted');

			queryClient.invalidateQueries({
				queryKey: ['hotels'],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { isDeleting, deleteHotel };
}
