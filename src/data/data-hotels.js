import { supabaseUrl } from '../services/supabase';
const imageUrl = `${supabaseUrl}/storage/v1/object/public/hotel-images/`;

// Book now and experience luxury in nature.
// Book now and elevate your group or family getaway to new heights of luxury.

export const hotels = [
	{
		name: '001',
		maxCapacity: 2,
		regularPrice: 250,
		discount: 0,
		image: imageUrl + 'hotel-001.jpg',
		description:
			'Nestled in the heart of Paris, The Serene Villa offers a luxurious stay with a grand lobby and elegant decor. The hotel is equipped with modern amenities including free Wi-Fi, a pool, a gym, and a restaurant.',
	},
	{
		name: '002',
		maxCapacity: 2,
		regularPrice: 350,
		discount: 25,
		image: imageUrl + 'hotel-002.jpg',
		description:
			'Located on the pristine beaches of the Maldives, Ocean View Resort offers stunning ocean views right from your room. The resort features a spa and a restaurant serving local and international cuisine.',
	},
	{
		name: '003',
		maxCapacity: 4,
		regularPrice: 300,
		discount: 0,
		image: imageUrl + 'hotel-003.jpg',
		description:
			'Situated in the beautiful mountains of Aspen, Colorado, Mountain Peak Lodge offers a cozy stay with breathtaking mountain views. The lodge features ski-in/ski-out facilities, a hot tub, and a restaurant serving delicious local cuisine.',
	},
	{
		name: '004',
		maxCapacity: 4,
		regularPrice: 500,
		discount: 50,
		image: imageUrl + 'hotel-004.jpg',
		description:
			'In the bustling city of New York, Urban Modern Hotel offers a sleek and contemporary design. The hotel features a gym, a rooftop bar, and a restaurant serving a variety of cuisines.',
	},
	{
		name: '005',
		maxCapacity: 6,
		regularPrice: 350,
		discount: 0,
		image: imageUrl + 'hotel-005.jpg',
		description:
			'Located in the beautiful island of Bali, Tropical Paradise Inn offers a relaxing stay amidst lush greenery. The inn features a pool, a spa, and a restaurant serving authentic Balinese cuisine.',
	},
	{
		name: '006',
		maxCapacity: 6,
		regularPrice: 800,
		discount: 100,
		image: imageUrl + 'hotel-006.jpg',
		description:
			'Offering a peaceful getaway in the heart of the city, The Tranquil Retreat features a pool, a gym, and a restaurant serving a variety of cuisines.',
	},
	{
		name: '007',
		maxCapacity: 8,
		regularPrice: 600,
		discount: 100,
		image: imageUrl + 'hotel-007.jpg',
		description:
			'Escape to our sanctuary in the city. Serene Sanctuary offers a peaceful stay with a spa and a restaurant serving a variety of cuisines.',
	},
	{
		name: '008',
		maxCapacity: 10,
		regularPrice: 1400,
		discount: 0,
		image: imageUrl + 'hotel-008.jpg',
		description:
			'Located in the heart of the city, The Peaceful Haven offers a quiet retreat with a hot tub and a restaurant serving a variety of cuisines.',
	},
];
