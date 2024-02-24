import supabase, { supabaseUrl } from './supabase';

export async function getHotels() {
	const { data, error } = await supabase.from('hotels').select('*');

	if (error) {
		console.error(error);
		throw new Error('Hotels could not be loaded');
	}

	return data;
}

export async function createEditHotel(newHotel, id) {
	const hasImagePath = newHotel.image?.startsWith?.(supabaseUrl);

	const imageName = `${Math.random()}-${newHotel.image.name}`.replaceAll(
		'/',
		''
	);
	const imagePath = hasImagePath
		? newHotel.image
		: `${supabaseUrl}/storage/v1/object/public/hotel-images/${imageName}`;

	// 1. Create/edit hotel
	let query = supabase.from('hotels');

	// A) CREATE
	if (!id) query = query.insert([{ ...newHotel, image: imagePath }]);

	// B) EDIT
	if (id) query = query.update({ ...newHotel, image: imagePath }).eq('id', id);

	const { data, error } = await query.select().single();

	if (error) {
		console.error(error);
		throw new Error('Hotel could not be created');
	}

	// 2. Upload image
	if (hasImagePath) return data;

	const { error: storageError } = await supabase.storage
		.from('hotel-images')
		.upload(imageName, newHotel.image);

	// 3. Delete the hotel IF there was an error uplaoding image
	if (storageError) {
		await supabase.from('hotels').delete().eq('id', data.id);
		console.error(storageError);
		throw new Error(
			'Hotel image could not be uploaded and the hotel was not created'
		);
	}

	return data;
}

export async function deleteHotel(id) {
	const { data, error } = await supabase.from('hotels').delete().eq('id', id);

	if (error) {
		console.error(error);
		throw new Error('Hotel could not be deleted');
	}

	return data;
}
