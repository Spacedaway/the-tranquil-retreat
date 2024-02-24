import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createEditHotel } from '../../services/apiHotels';

export function useCreateHotel() {
	const queryClient = useQueryClient();

	const { mutate: createHotel, isLoading: isCreating } = useMutation({
		mutationFn: createEditHotel,
		onSuccess: () => {
			toast.success('New hotel successfully created');
			queryClient.invalidateQueries({ queryKey: ['hotels'] });
		},
		onError: (err) => toast.error(err.message),
	});

	return { isCreating, createHotel };
}
