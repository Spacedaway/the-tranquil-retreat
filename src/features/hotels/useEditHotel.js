import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditHotel } from '../../services/apiHotels';
import { toast } from 'react-hot-toast';

export function useEditHotel() {
	const queryClient = useQueryClient();

	const { mutate: editHotel, isLoading: isEditing } = useMutation({
		mutationFn: ({ newHotelData, id }) => createEditHotel(newHotelData, id),
		onSuccess: () => {
			toast.success('Hotel successfully edited');
			queryClient.invalidateQueries({ queryKey: ['hotels'] });
		},
		onError: (err) => toast.error(err.message),
	});

	return { isEditing, editHotel };
}
