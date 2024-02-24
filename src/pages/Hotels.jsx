import HotelTable from '../features/hotels/HotelTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import AddHotel from '../features/hotels/AddHotel';
import HotelTableOperations from '../features/hotels/HotelTableOperations';

function Hotels() {
	return (
		<>
			<Row type='horizontal'>
				<Heading as='h1'>All hotels</Heading>
				<HotelTableOperations />
			</Row>

			<Row>
				<HotelTable />
				<AddHotel />
			</Row>
		</>
	);
}

export default Hotels;
