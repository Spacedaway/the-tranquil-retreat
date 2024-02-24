import CreateHotelForm from '../features/hotels/CreateHotelForm';

import Button from '../ui/Button';
import Modal from '../ui/Modal';

function AddHotel() {
	return (
		<div>
			<Modal>
				<Modal.Open opens={'hotel-form'}>
					<Button>Add new hotel</Button>
				</Modal.Open>
				<Modal.Window name={'hotel-form'}>
					<CreateHotelForm />
				</Modal.Window>
			</Modal>
		</div>
	);
}
export default AddHotel;
