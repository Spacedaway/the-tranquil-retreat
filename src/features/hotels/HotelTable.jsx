import { useSearchParams } from 'react-router-dom';

import HotelRow from './HotelRow';
import { useHotels } from './useHotels';

import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';

function HotelTable() {
	const { isLoading, hotels } = useHotels();
	const [searchParams] = useSearchParams();

	if (isLoading) return <Spinner />;

	const filterValue = searchParams.get('discount') || 'all';

	// FILTER
	let filteredHotels;
	if (filterValue === 'all') filteredHotels = hotels;
	if (filterValue === 'no-discount')
		filteredHotels = hotels.filter((hotel) => hotel.discount === 0);
	if (filterValue === 'with-discount')
		filteredHotels = hotels.filter((hotel) => hotel.discount > 0);

	// SORT
	const sortBy = searchParams.get('sortBy') || 'name-asc';
	const [field, direction] = sortBy.split('-');
	const modifier = direction === 'asc' ? 1 : -1;
	const sortedHotels = filteredHotels.sort(
		(a, b) => (a[field] - b[field]) * modifier
	);

	return (
		<Menus>
			<Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
				<Table.Header>
					<div></div>
					<div>Hotel</div>
					<div>Capacity</div>
					<div>Price</div>
					<div>Discount</div>
					<div></div>
				</Table.Header>

				<Table.Body
					data={sortedHotels}
					render={(hotel) => <HotelRow hotel={hotel} key={hotel.id} />}
				/>
			</Table>
		</Menus>
	);
}

export default HotelTable;
