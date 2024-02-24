import HotelTable from '../features/hotels/HotelTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import AddHotel from '../features/hotels/AddHotel';

function Hotels() {
	return (
		<>
			<Row type='horizontal'>
				<Heading as='h1'>All hotels</Heading>
				<p>Filter / Sort</p>
			</Row>

			<Row>
				<HotelTable />
				<AddHotel />
			</Row>
		</>
	);
}

export default Hotels;
