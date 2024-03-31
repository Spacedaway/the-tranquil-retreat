import { useState } from 'react';
import { isFuture, isPast, isToday } from 'date-fns';
import supabase from '../services/supabase';
import Button from '../ui/Button';
import { subtractDates } from '../utils/helpers';

import { bookings } from './data-bookings';
import { hotels } from './data-hotels';
import { guests } from './data-guests';

// const originalSettings = {
//   minBookingLength: 3,
//   maxBookingLength: 30,
//   maxGuestsPerBooking: 10,
//   breakfastPrice: 15,
// };

async function deleteGuests() {
	const { error } = await supabase.from('guests').delete().gt('id', 0);
	if (error) console.log(error.message);
}

async function deletehotels() {
	const { error } = await supabase.from('hotels').delete().gt('id', 0);
	if (error) console.log(error.message);
}

async function deleteBookings() {
	const { error } = await supabase.from('bookings').delete().gt('id', 0);
	if (error) console.log(error.message);
}

async function createGuests() {
	const { error } = await supabase.from('guests').insert(guests);
	if (error) console.log(error.message);
}

async function createhotels() {
	const { error } = await supabase.from('hotels').insert(hotels);
	if (error) console.log(error.message);
}

async function createBookings() {
	// Bookings need a guestId and a hotelId. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIds and hotelIds, and then replace the original IDs in the booking data with the actual ones from the DB
	const { data: guestsIds } = await supabase
		.from('guests')
		.select('id')
		.order('id');
	const allGuestIds = guestsIds.map((hotel) => hotel.id);
	const { data: hotelsIds } = await supabase
		.from('hotels')
		.select('id')
		.order('id');
	const allhotelIds = hotelsIds.map((hotel) => hotel.id);

	const finalBookings = bookings.map((booking) => {
		// Here relying on the order of hotels, as they don't have and ID yet
		const hotel = hotels.at(booking.hotelId - 1);
		const numNights = subtractDates(booking.endDate, booking.startDate);
		const hotelPrice = numNights * (hotel.regularPrice - hotel.discount);
		const extrasPrice = booking.hasBreakfast
			? numNights * 15 * booking.numGuests
			: 0; // hardcoded breakfast price
		const totalPrice = hotelPrice + extrasPrice;

		let status;
		if (
			isPast(new Date(booking.endDate)) &&
			!isToday(new Date(booking.endDate))
		)
			status = 'checked-out';
		if (
			isFuture(new Date(booking.startDate)) ||
			isToday(new Date(booking.startDate))
		)
			status = 'unconfirmed';
		if (
			(isFuture(new Date(booking.endDate)) ||
				isToday(new Date(booking.endDate))) &&
			isPast(new Date(booking.startDate)) &&
			!isToday(new Date(booking.startDate))
		)
			status = 'checked-in';

		return {
			...booking,
			numNights,
			hotelPrice,
			extrasPrice,
			totalPrice,
			guestId: allGuestIds.at(booking.guestId - 1),
			hotelId: allhotelIds.at(booking.hotelId - 1),
			status,
		};
	});

	const { error } = await supabase.from('bookings').insert(finalBookings);
	if (error) console.log(error.message);
}

function Uploader() {
	const [isLoading, setIsLoading] = useState(false);

	async function uploadAll() {
		setIsLoading(true);
		// Bookings need to be deleted FIRST
		await deleteBookings();
		await deleteGuests();
		await deletehotels();

		// Bookings need to be created LAST
		await createGuests();
		await createhotels();
		await createBookings();

		setIsLoading(false);
	}

	async function uploadBookings() {
		setIsLoading(true);
		await deleteBookings();
		await createBookings();
		setIsLoading(false);
	}

	return (
		<div
			style={{
				marginTop: 'auto',
				backgroundColor: '#e0e7ff',
				padding: '8px',
				borderRadius: '5px',
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
			}}
		>
			<h3>SAMPLE DATA</h3>

			<Button onClick={uploadAll} disabled={isLoading}>
				Upload ALL
			</Button>

			<Button onClick={uploadBookings} disabled={isLoading}>
				Upload bookings ONLY
			</Button>
		</div>
	);
}

export default Uploader;
