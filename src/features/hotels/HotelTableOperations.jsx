import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function HotelTableOperations() {
	return (
		<TableOperations>
			<Filter
				filterField={'discount'}
				options={[
					{ value: 'all', label: 'All' },
					{ value: 'no-discount', label: 'No Discount' },
					{ value: 'with-discount', label: 'With Discount' },
				]}
			/>

			<SortBy
				options={[
					{ value: 'name-asc', label: 'Sort by name (A-Z)' },
					{ value: 'name-desc', label: 'Sort by name (Z-A)' },
					{
						value: 'maxCapacity-asc',
						label: 'Sort by max capacity (Low to High)',
					},
					{
						value: 'maxCapacity-desc',
						label: 'Sort by max capacity (High to Low)',
					},
					{
						value: 'regularPrice-asc',
						label: 'Sort by regular price (Low to High)',
					},
					{
						value: 'regularPrice-desc',
						label: 'Sort by regular price (High to Low)',
					},
				]}
			/>
		</TableOperations>
	);
}
export default HotelTableOperations;
