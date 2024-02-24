import styled from 'styled-components';

import Spinner from '../../ui/Spinner';
import HotelRow from './HotelRow';
import { useHotels } from './useHotels';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';

const TableHeader = styled.header`
	display: grid;
	grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
	column-gap: 2.4rem;
	align-items: center;

	background-color: var(--color-grey-50);
	border-bottom: 1px solid var(--color-grey-100);
	text-transform: uppercase;
	letter-spacing: 0.4px;
	font-weight: 600;
	color: var(--color-grey-600);
	padding: 1.6rem 2.4rem;
`;

function HotelTable() {
	const { isLoading, hotels } = useHotels();
	const [searchParams] = useSearchParams();

	if (isLoading) return <Spinner />;

	const filterValue = searchParams.get('discount') || 'all';

	let filteredHotels;
	if (filterValue === 'all') filteredHotels = hotels;
	if (filterValue === 'no-discount')
		filteredHotels = hotels.filter((hotel) => hotel.discount === 0);
	if (filterValue === 'with-discount')
		filteredHotels = hotels.filter((hotel) => hotel.discount > 0);

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
					data={filteredHotels}
					render={(hotel) => <HotelRow hotel={hotel} key={hotel.id} />}
				/>
			</Table>
		</Menus>
	);
}

export default HotelTable;
