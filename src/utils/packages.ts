import type { TravelPackage } from './interfaces';

export const packages: TravelPackage[] = [
	{
		id: 1,
		slug: 'paris-y-la-costa-azul',
		name: 'París y la Costa Azul',
		description:
			'Vive lo mejor de Francia con este exclusivo paquete que te llevará de París a la Costa Azul. Disfruta de visitas a iconos como el Louvre y Orsay, clases de repostería, y cenas en restaurantes de renombre. Luego, relájate en Niza con recorridos vinícolas, sesiones de fotos en la costa y visitas a Cannes y Grasse. Un viaje perfecto para los amantes de la cultura, la gastronomía y el lujo.',
		price: 3000,
		currency: 'USD',
		allInclusive: true,
		images: ['/img/paris/1.jpg', '/img/paris/2.jpg', '/img/paris/3.jpg'],
		durationDays: 11,
		destinations: ['París', 'Niza'],
		itinerary: [
			{
				day: 1,
				city: 'París',
				activities: [
					{
						time: '08:00',
						description: 'Llegada a París (aeropuerto).',
					},
					{
						time: '09:00',
						description:
							'Traslado al Hotel Academia Saint Germain (4 estrellas) y check-in.',
					},
					{ time: '09:30', description: 'Desayuno en el hotel.' },
					{
						time: '10:30 - 13:00',
						description: 'Visita a los Museos del Louvre y Orsay.',
					},
					{
						time: '13:30',
						description:
							'Almuerzo en el restaurante Les Deux Magots.',
					},
					{
						time: '15:00 - 18:30',
						description:
							'Recorrido guiado por París, visitando Galeries Lafayette y otros sitios emblemáticos.',
					},
					{
						time: '19:00',
						description: 'Cena en el restaurante Le Grand Véfour.',
					},
					{ time: '21:00', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 2,
				city: 'París',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{
						time: '09:30 - 11:30',
						description:
							'Clase de repostería en una panadería tradicional.',
					},
					{
						time: '12:00',
						description: 'Almuerzo en un restaurante local.',
					},
					{
						time: '14:00 - 18:00',
						description:
							'Tour gastronómico por tres restaurantes destacados.',
					},
					{
						time: '19:00',
						description: 'Cena opcional en el hotel.',
					},
					{
						time: '21:00',
						description:
							'Noche en el Hotel Academia Saint Germain.',
					},
				],
			},
			{
				day: 3,
				city: 'París',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{
						time: '09:30 - 12:30',
						description:
							'Visita a la Torre Eiffel y paseo en barco por el Sena.',
					},
					{
						time: '13:00',
						description:
							'Almuerzo en un restaurante con vistas al Sena.',
					},
					{
						time: '14:30 - 17:30',
						description:
							'Recorrido por Montmartre y la Basílica del Sagrado Corazón.',
					},
					{ time: '18:00', description: 'Tiempo libre.' },
					{
						time: '19:30',
						description: 'Cena en un bistró típico en Montmartre.',
					},
					{ time: '21:00', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 4,
				city: 'París',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{
						time: '09:00 - 12:00',
						description:
							'Visita a la Catedral de Notre-Dame y Sainte-Chapelle.',
					},
					{
						time: '12:30',
						description: 'Almuerzo en Île Saint-Louis.',
					},
					{
						time: '14:00 - 17:00',
						description: 'Visita al Palacio de Versalles.',
					},
					{ time: '19:30', description: 'Cena en Saint-Germain.' },
					{ time: '21:00', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 5,
				city: 'París',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{
						time: '09:30 - 12:00',
						description:
							'Visita al Museo Rodin y el Museo de la Orangerie.',
					},
					{
						time: '12:30',
						description: 'Almuerzo en un restaurante cercano.',
					},
					{
						time: '14:00 - 18:00',
						description: 'Tiempo libre para compras o explorar.',
					},
					{
						time: '19:30',
						description:
							'Cena en el restaurante Le Comptoir du Relais.',
					},
					{
						time: '21:00',
						description:
							'Última noche en el Hotel Academia Saint Germain.',
					},
				],
			},
			{
				day: 6,
				city: 'Niza',
				activities: [
					{ time: '07:00', description: 'Desayuno en el hotel.' },
					{
						time: '08:00',
						description: 'Salida desde París en tren hacia Niza.',
					},
					{ time: '13:00', description: 'Almuerzo en el tren.' },
					{
						time: '14:00',
						description:
							'Llegada a Niza y traslado al Hotel Boscolo (5 estrellas).',
					},
					{
						time: '15:30 - 18:00',
						description:
							'Recorrido gastronómico por los mercados locales de Niza.',
					},
					{
						time: '20:00',
						description: 'Cena en el restaurante La Merenda.',
					},
					{
						time: '22:00',
						description: 'Noche en el Hotel Boscolo.',
					},
				],
			},
			{
				day: 7,
				city: 'Niza',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{
						time: '09:30 - 11:00',
						description:
							'Visita al Museo Marc Chagall y Museo Matisse.',
					},
					{
						time: '12:00',
						description:
							'Almuerzo en un restaurante con vista al mar.',
					},
					{
						time: '14:00 - 18:00',
						description:
							'Recorrido por la Promenade des Anglais y el casco antiguo.',
					},
					{
						time: '19:30',
						description:
							'Cena en un restaurante gourmet en el casco antiguo.',
					},
					{ time: '22:00', description: 'Noche en el hotel.' },
				],
			},
			{
				day: 8,
				city: 'Niza',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{
						time: '09:30 - 12:00',
						description:
							'Excursión por la costa de Niza, explorando la ciudad y sus alrededores.',
					},
					{
						time: '12:30',
						description: 'Almuerzo en un restaurante local.',
					},
					{
						time: '14:00 - 18:00',
						description:
							'Día libre para explorar o descansar en la playa.',
					},
					{ time: '20:00', description: 'Cena en el hotel.' },
					{ time: '22:00', description: 'Noche en el hotel.' },
				],
			},
			{
				day: 9,
				city: 'Niza',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{
						time: '09:30 - 12:30',
						description: 'Día en el spa del Hotel Boscolo.',
					},
					{ time: '12:30', description: 'Almuerzo en el hotel.' },
					{
						time: '14:00 - 18:00',
						description:
							'Tiempo libre para disfrutar de la piscina o hacer compras en la ciudad.',
					},
					{
						time: '20:00',
						description:
							'Cena de despedida en un restaurante con vista al mar.',
					},
					{ time: '22:00', description: 'Noche en el hotel.' },
				],
			},
			{
				day: 10,
				city: 'París',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{ time: '09:00', description: 'Vuelo a París.' },
					{
						time: '11:00',
						description: 'Llegada a París y traslado al hotel.',
					},
					{
						time: '12:30',
						description:
							'Almuerzo en un restaurante cercano al hotel.',
					},
					{
						time: '14:00 - 18:00',
						description:
							'Última tarde libre para compras o actividades opcionales en París.',
					},
					{
						time: '20:00',
						description:
							'Cena de despedida en un restaurante gourmet.',
					},
					{
						time: '22:00',
						description: 'Noche en el hotel en París.',
					},
				],
			},
			{
				day: 11,
				city: 'París',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{
						time: '09:00',
						description: 'Check-out y traslado al aeropuerto.',
					},
					{
						time: '11:00',
						description: 'Vuelo de regreso a la ciudad de origen.',
					},
				],
			},
		],
	},
	{
		id: 2,
		name: 'Portugal, Lisboa – Oporto',
		description:
			'Portugal cuenta con una gran cantidad de lugares declarados Patrimonio de la Humanidad por la UNESCO y, aunque no es posible visitarlos todos en un solo viaje, sí que se pueden ver los lugares más destacados. La encantadora Sintra, la ciudad literaria de Óbidos, Batalha , Aveiro (famosa por sus canales y sus barcos moliceiros), Braga y Guimaraes esperan tu visita. Enamórate de la historia y la cultura de Lisboa (vistas espectaculares desde las colinas de Alfama o del Castillo de San Jorge, clima agradable durante todo el año y gente amable) y tómate un tiempo para explorar el centro de la UNESCO de Oporto.',
		price: 3000,
		currency: 'USD',
		allInclusive: true,
		durationDays: 11,
		destinations: ['Lisboa', 'Oporto'],
		slug: 'portugal-lisboa-oporto',
		images: ['/img/portugal/1.jpg', '/img/portugal/2.jpg'],
		itinerary: [
			{
				day: 1,
				city: 'Lisboa',
				activities: [
					{
						time: '08:00-09:00',
						description:
							'Llegada al hotel AlmaLusa Baixa Chiado y desayuno en el hotel.',
					},
					{
						time: '09:30-14:30',
						description:
							'Visita guiada a Sintra, Palacio de Pena, Quinta da Regaleira, Cabo da Roca y Cascais.',
					},
					{
						time: '13:00-14:00',
						description:
							'Almuerzo en un restaurante típico en Sintra.',
					},
					{
						time: '15:00-15:45',
						description:
							'Crucero exprés de 45 minutos en barcos tradicionales de Lisboa.',
					},
					{
						time: '18:00-21:00',
						description:
							'Tour gastronómico privado en Lisboa con 6-10 degustaciones, que incluyen la cena.',
					},
					{ time: '21:30', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 2,
				city: 'Lisboa',
				activities: [
					{
						time: '08:00-09:00',
						description: 'Desayuno en el hotel.',
					},
					{
						time: '09:30-11:30',
						description:
							'Recorrido histórico en tuk tuk privado por el centro de Lisboa.',
					},
					{
						time: '12:00-13:30',
						description:
							'Almuerzo en un restaurante tradicional de Lisboa.',
					},
					{
						time: '14:00-15:30',
						description:
							'Visita al Museo de Arte Divertido 3D en Lisboa.',
					},
					{
						time: '16:00-18:00',
						description: 'Recorrido a pie por la antigua Lisboa.',
					},
					{
						time: '20:00-22:00',
						description: 'Cena de 3 platos de cocina del Alentejo.',
					},
					{ time: '22:30', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 3,
				city: 'Lisboa',
				activities: [
					{
						time: '08:00-09:00',
						description: 'Desayuno en el hotel.',
					},
					{
						time: '09:30-17:00',
						description:
							'Excursión de un día a Arrábida y Sesimbra con cata de vinos.',
					},
					{ time: '20:00-22:00', description: 'Cena en Lisboa.' },
					{ time: '22:30', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 4,
				city: 'Lisboa',
				activities: [
					{
						time: '08:00-09:00',
						description: 'Desayuno en el hotel.',
					},
					{
						time: '09:30-12:00',
						description:
							'Recorrido histórico por el centro de Lisboa.',
					},
					{
						time: '12:30-14:00',
						description: 'Almuerzo en un restaurante local.',
					},
					{
						time: '16:00-18:00',
						description:
							'Recorrido en barco de 2 horas al atardecer.',
					},
					{ time: '20:00-21:30', description: 'Cena en Lisboa.' },
					{ time: '22:00', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 5,
				city: 'Lisboa',
				activities: [
					{
						time: '08:00-09:00',
						description: 'Desayuno en el hotel.',
					},
					{
						time: '09:30-12:30',
						description:
							'Recorrido gastronómico y cultural a pie con degustaciones.',
					},
					{ time: '13:00-14:30', description: 'Almuerzo.' },
					{
						time: '15:00-17:30',
						description:
							'Recorrido en bicicleta eléctrica por las 7 colinas de Lisboa.',
					},
					{ time: '20:00-22:00', description: 'Cena en Lisboa.' },
					{ time: '22:30', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 6,
				city: 'Oporto',
				activities: [
					{
						time: '08:00-09:00',
						description: 'Desayuno en el hotel.',
					},
					{
						time: '09:30-11:30',
						description: 'Tren de Lisboa a Oporto.',
					},
					{
						time: '12:00',
						description: 'Llegada al Hotel Eurostars Porto Duero.',
					},
					{ time: '13:00-14:00', description: 'Almuerzo en Oporto.' },
					{
						time: '14:30-16:00',
						description:
							'Visita al Museo de Arte 3D Fun en Oporto.',
					},
					{
						time: '17:00-19:00',
						description:
							'Recorrido gastronómico y de cata de vinos por Oporto.',
					},
					{
						time: '19:30-21:30',
						description:
							'Cena en un restaurante recomendado en Oporto.',
					},
					{ time: '22:00', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 7,
				city: 'Oporto',
				activities: [
					{
						time: '08:00-09:00',
						description: 'Desayuno en el hotel.',
					},
					{
						time: '09:30-12:30',
						description:
							'Visita guiada a pie de 3 horas por Oporto.',
					},
					{
						time: '13:00-14:30',
						description: 'Almuerzo en un restaurante local.',
					},
					{
						time: '15:00-19:00',
						description:
							'Excursión al puente colgante de Arouca y el paseo del Paiva.',
					},
					{
						time: '20:00-22:00',
						description: 'Cena tradicional portuguesa en Oporto.',
					},
					{ time: '22:30', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 8,
				city: 'Oporto',
				activities: [
					{
						time: '08:00-09:00',
						description: 'Desayuno en el hotel.',
					},
					{
						time: '09:30-11:30',
						description:
							'Recorrido en Segway por lo mejor de Oporto.',
					},
					{
						time: '12:00-15:00',
						description:
							'Recorrido vinícola por el Valle del Duero.',
					},
					{
						time: '20:00-22:00',
						description: 'Cena en un restaurante en Oporto.',
					},
					{ time: '22:30', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 9,
				city: 'Oporto',
				activities: [
					{
						time: '08:00-09:00',
						description: 'Desayuno en el hotel.',
					},
					{
						time: '09:30-17:30',
						description:
							'Excursión de un día al puente colgante de Arouca y el paseo del Paiva desde Oporto.',
					},
					{ time: '20:00-22:00', description: 'Cena en Oporto.' },
					{ time: '22:30', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 10,
				city: 'Oporto',
				activities: [
					{
						time: '08:00-09:00',
						description: 'Desayuno en el hotel.',
					},
					{
						time: '09:30-12:30',
						description:
							'Visita guiada por la arquitectura de Oporto.',
					},
					{ time: '13:00-14:30', description: 'Almuerzo.' },
					{
						time: '15:00-19:00',
						description:
							'Excursión de medio día a Aveiro y Costa Nova.',
					},
					{ time: '20:00-22:00', description: 'Cena en Oporto.' },
					{ time: '22:30', description: 'Regreso al hotel.' },
				],
			},
			{
				day: 11,
				city: 'Oporto',
				activities: [
					{
						time: '08:00-09:00',
						description: 'Desayuno en el hotel.',
					},
					{
						time: '09:30',
						description: 'Check out y traslado al aeropuerto.',
					},
				],
			},
		],
	},
	{
		id: 3,
		name: 'España, Barcelona – Madrid',
		description:
			'Combina Barcelona y Madrid, gloriosas ciudades de España, viajando entre ellas en tren. Visita Barcelona que combina un patrimonio cultural único con lo mejor en gastronomía, estilo, música y buenos momentos junto a Madrid una viva, enérgica y vibrante ciudad con una merecida reputación por su vida nocturna y sus contribuciones culturales con sus diversos museos españoles.',
		price: 2114.0,
		currency: 'USD',
		allInclusive: true,
		durationDays: 11,
		destinations: ['Barcelona', 'Madrid'],
		images: ['/img/espana/1.jpg', '/img/espana/2.jpg', '/img/espana/3.jpg'],
		itinerary: [
			{
				day: 1,
				city: 'Barcelona',
				activities: [
					{
						time: '09:00',
						description: "Traslado al hotel 'Palace Hotel'",
					},
					{
						time: '12:00',
						description: 'Llegada y check-in en el hotel',
					},
					{
						time: '13:00',
						description: 'Almuerzo (opcional en la zona)',
					},
					{
						time: '15:00',
						description: 'Dirígete a La Plaça de Catalunya',
					},
					{
						time: '19:00',
						description:
							'Paseo nocturno por La Rambla hasta el Mirador de Colón',
					},
					{ time: '20:30', description: 'Cena en Barceloneta' },
					{ time: '22:00', description: 'Regreso al hotel' },
				],
			},
			{
				day: 2,
				city: 'Barcelona',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel' },
					{
						time: '09:30',
						description: 'Tour por la Catedral y el Palau del Rei',
					},
					{
						time: '12:30',
						description:
							'Excursión a Girona, Figueres y Museo Dalí',
					},
					{
						time: '13:00',
						description: 'Almuerzo en Can Culleretes',
					},
					{
						time: '15:00',
						description:
							'Visita opcional de Barcelona artística (La Sagrada Familia y Parque Güell)',
					},
					{ time: '17:30', description: "Explora L'Eixample" },
					{
						time: '20:00',
						description: 'Paseo y compras en Passeig de Gràcia',
					},
					{ time: '21:30', description: 'Cena en Casa Calvet' },
					{ time: '23:00', description: 'Regreso al hotel' },
				],
			},
			{
				day: 3,
				city: 'Barcelona',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel' },
					{ time: '09:00', description: 'Visita al Museu Picasso' },
					{
						time: '10:30',
						description: 'Café y pasteles en Café Tèxtil',
					},
					{
						time: '11:30',
						description:
							'Visita a la catedral de Santa María del Mar',
					},
					{
						time: '13:00',
						description: 'Dirígete a Montjuïc y Poble Espanyol',
					},
					{ time: '15:00', description: 'Almuerzo (opcional)' },
					{ time: '18:00', description: 'Tiempo libre' },
					{
						time: '20:00',
						description: 'Cena en el hotel o en la zona',
					},
				],
			},
			{
				day: 4,
				city: 'Barcelona',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel' },
					{
						time: '09:30',
						description: 'Recorrido guiado en Segway',
					},
					{
						time: '12:00',
						description:
							'Espectáculo flamenco y tour de tapas en el Born',
					},
					{ time: '14:00', description: 'Almuerzo (incluido)' },
					{
						time: '15:30',
						description: 'Excursión a los tres pueblos medievales',
					},
					{
						time: '18:00',
						description:
							'Recorrido al atardecer por Montserrat con tapas y vinos gourmet',
					},
					{ time: '21:00', description: 'Cena' },
					{ time: '22:30', description: 'Regreso al hotel' },
				],
			},
			{
				day: 5,
				city: 'Barcelona',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel' },
					{
						time: '09:00',
						description: 'Tour privado de 4 horas por Barcelona',
					},
					{ time: '13:00', description: 'Almuerzo' },
					{
						time: '14:30',
						description: 'Visita guiada al Barrio Gótico',
					},
					{
						time: '16:00',
						description: 'Tour en bicicleta eléctrica',
					},
					{
						time: '18:00',
						description:
							'Recorrido privado por las mejores vistas de Barcelona',
					},
					{ time: '20:00', description: 'Cena en Hard Rock Café' },
					{ time: '22:00', description: 'Regreso al hotel' },
				],
			},
			{
				day: 6,
				city: 'Barcelona',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel' },
					{ time: '09:00', description: 'Sesión fotográfica' },
					{
						time: '10:30',
						description: 'Introducción a la cerámica artesanal',
					},
					{ time: '13:00', description: 'Almuerzo' },
					{
						time: '14:30',
						description: 'Recorrido privado sobre arte callejero',
					},
					{ time: '17:00', description: 'Tiempo libre' },
					{
						time: '20:00',
						description: 'Viaje a Madrid a bordo del AVE',
					},
				],
			},
			{
				day: 7,
				city: 'Madrid',
				activities: [
					{
						time: '09:30',
						description:
							'Llegada a la estación de tren de Madrid y traslado al hotel Barcelo Torre de Madrid',
					},
					{
						time: '11:00',
						description:
							'Check-in y almuerzo en café al aire libre',
					},
					{
						time: '13:30',
						description:
							'Recorrido opcional Madrid City Hop-On Hop Off',
					},
					{
						time: '15:00',
						description:
							'Visita a la Catedral de la Almudena y Palacio Real',
					},
					{
						time: '17:00',
						description:
							'Cena (paella y sangría) en Plaza de Oriente',
					},
					{ time: '19:00', description: 'Regreso al hotel' },
				],
			},
			{
				day: 8,
				city: 'Madrid',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel' },
					{ time: '09:30', description: 'Visita al Reina Sofía' },
					{
						time: '11:00',
						description: 'Paseo por el Parque del Retiro',
					},
					{
						time: '13:00',
						description: 'Parada en el Palacio de Cristal',
					},
					{
						time: '14:30',
						description: 'Salida a Plaza de la Independencia',
					},
					{
						time: '15:00',
						description: 'Continuación a Plaza de Cibeles',
					},
					{ time: '16:00', description: 'Almuerzo en Gran Vía' },
					{
						time: '17:30',
						description:
							'Visita rápida al Convento de las Descalzas Reales',
					},
					{
						time: '19:00',
						description: 'Cena en taberna junto al lago',
					},
				],
			},
			{
				day: 9,
				city: 'Madrid',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel' },
					{ time: '09:00', description: 'Recorrido histórico a pie' },
					{
						time: '11:00',
						description: 'Entrada al Centro Cultural Flamenco',
					},
					{
						time: '12:30',
						description: 'Recorrido de Jamón Ibérico y Vino',
					},
					{
						time: '14:00',
						description: 'Clase de cocina de 10 tapas',
					},
					{ time: '16:00', description: 'Descanso en el hotel' },
					{
						time: '18:00',
						description: 'Recorrido a pie sobre historia islámica',
					},
					{
						time: '20:00',
						description: 'Ruta 4 Bodegas Ribera del Duero',
					},
					{
						time: '21:30',
						description: 'Recorrido nocturno a pie por tapas',
					},
					{ time: '23:00', description: 'Regreso al hotel' },
				],
			},
			{
				day: 10,
				city: 'Madrid',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel' },
					{
						time: '09:00',
						description: 'Recorrido en tuk tuk por Madrid',
					},
					{
						time: '11:00',
						description:
							'Visita guiada: historia de las calles y edificios',
					},
					{
						time: '13:00',
						description: 'Almuerzo en Casa de la Bola',
					},
					{ time: '15:00', description: 'Descanso en el hotel' },
					{
						time: '17:00',
						description: 'Recorrido en bicicleta por Retiro',
					},
					{
						time: '20:00',
						description: 'Cena de despedida en Botín',
					},
				],
			},
			{
				day: 11,
				city: 'Madrid',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel' },
					{ time: '09:00', description: 'Tiempo libre' },
					{ time: '11:00', description: 'Check-out del hotel' },
					{ time: '12:00', description: 'Traslado al aeropuerto' },
				],
			},
		],
		slug: 'espana-barcelona-madrid',
	},
	{
		id: 4,
		name: 'Grecia, Atenas – Tesalónica',
		description:
			'Este paquete de 10 días te llevará a explorar la rica cultura de Grecia, comenzando en Atenas con una clase de cocina, recorridos gastronómicos y visitas a la Acrópolis y Corinto. Luego, viajarás a Tesalónica, donde disfrutarás de paseos históricos, degustaciones locales y un recorrido del patrimonio judío. Combina la historia, la gastronomía y la cultura griega en un viaje único con alojamientos cómodos y opciones de cenas tradicionales.',
		price: 3100,
		currency: 'USD',
		allInclusive: true,
		durationDays: 10,
		destinations: ['Atenas', 'Tesalónica'],
		images: ['/img/grecia/1.jpg', '/img/grecia/2.jpg', '/img/grecia/3.jpg'],
		itinerary: [
			{
				day: 1,
				city: 'Atenas',
				activities: [
					{
						time: '08:00',
						description: 'Llegada a Atenas en avión.',
					},
					{ time: '09:00', description: 'Desayuno en el hotel.' },
					{
						time: '10:00 - 14:00',
						description:
							'Clase de cocina de 4 horas en Atenas con visita al mercado central.',
					},
					{
						time: '14:00 - 15:30',
						description: 'Almuerzo opcional en el hotel.',
					},
					{
						time: '16:00 - 18:00',
						description:
							'Paseo gastronómico por las calles de Atenas (por la calle Ermou).',
					},
					{
						time: '18:30 - 21:00',
						description:
							'Recorrido vinícola por Atenas: experiencia excepcional en el Museo del Vino de Atenas.',
					},
					{ time: '21:30', description: 'Vuelta al hotel.' },
				],
			},
			{
				day: 2,
				city: 'Atenas',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{
						time: '09:00 - 11:30',
						description:
							'Recorrido en bicicleta eléctrica por la Acrópolis, el Partenón y lo más destacado de Atenas.',
					},
					{
						time: '12:00 - 13:30',
						description: 'Almuerzo opcional en el hotel.',
					},
					{
						time: '14:00 - 16:30',
						description:
							'Visita guiada a pie por la Acrópolis y el Partenón.',
					},
					{
						time: '17:00 - 19:30',
						description:
							'Recorrido bíblico privado por la antigua Corinto y el canal del Istmo.',
					},
					{
						time: '20:00',
						description: 'Cena opcional en el hotel.',
					},
				],
			},
			{
				day: 3,
				city: 'Atenas - Corinto, Epidauro y Nafplio',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{
						time: '09:00 - 18:00',
						description:
							'Excursión privada de un día completo a la antigua Corinto, Epidauro y Nafplio.',
					},
					{
						time: '20:00',
						description: 'Cena opcional en el hotel.',
					},
				],
			},
			{
				day: 4,
				city: 'Atenas - Delfos',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{
						time: '09:00 - 18:00',
						description:
							'Excursión de un día a Delfos con entradas incluidas y guía en inglés desde Atenas.',
					},
					{
						time: '20:00',
						description: 'Cena opcional en el hotel.',
					},
				],
			},
			{
				day: 5,
				city: 'Atenas - Tesalónica',
				activities: [
					{ time: '08:00', description: 'Desayuno en el hotel.' },
					{
						time: '09:00',
						description:
							'Salida de Atenas en coche hacia Tesalónica.',
					},
					{
						time: '13:00',
						description: 'Almuerzo en ruta (parada sugerida).',
					},
					{ time: '16:00', description: 'Llegada a Tesalónica.' },
					{
						time: '16:30 - 18:30',
						description:
							'Paseo a base de hierbas por el casco antiguo de Tesalónica.',
					},
					{
						time: '19:00 - 21:00',
						description:
							'Recorrido gastronómico por el mercado al aire libre con degustación.',
					},
					{
						time: '21:30',
						description:
							'Cena opcional en el hotel Ilissia (3 estrellas).',
					},
				],
			},
			{
				day: 6,
				city: 'Tesalónica - Meteora',
				activities: [
					{
						time: '08:00',
						description: 'Desayuno opcional en el hotel.',
					},
					{
						time: '09:00 - 18:00',
						description:
							'Excursión de un día completo a Meteora desde Tesalónica.',
					},
					{
						time: '20:00',
						description: 'Cena opcional en el hotel.',
					},
				],
			},
			{
				day: 7,
				city: 'Tesalónica - Sithonia',
				activities: [
					{
						time: '08:00',
						description: 'Desayuno opcional en el hotel.',
					},
					{
						time: '09:00 - 12:30',
						description:
							'Recorrido por las playas y pueblos pintorescos de Tesalónica hasta Sithonia.',
					},
					{
						time: '13:00 - 14:30',
						description:
							'Recorrido gastronómico de ouzo y meze griego con un local.',
					},
					{
						time: '15:00 - 18:00',
						description:
							'Visita guiada privada a la antigua Vergina y la ciudad de Veria.',
					},
					{
						time: '20:00',
						description: 'Cena opcional en el hotel.',
					},
				],
			},
			{
				day: 8,
				city: 'Tesalónica - Meteora',
				activities: [
					{
						time: '08:00',
						description: 'Desayuno opcional en el hotel.',
					},
					{
						time: '09:00 - 18:00',
						description:
							'Excursión de día completo por los monasterios de Meteora.',
					},
					{
						time: '20:00',
						description: 'Cena opcional en el hotel.',
					},
				],
			},
			{
				day: 9,
				city: 'Tesalónica',
				activities: [
					{
						time: '08:00',
						description: 'Desayuno opcional en el hotel.',
					},
					{
						time: '09:00 - 12:00',
						description:
							'Recorrido privado de búsqueda del tesoro por Tesalónica con paradas para degustación gastronómica.',
					},
					{
						time: '13:00 - 15:00',
						description: 'Tiempo libre para almorzar.',
					},
					{
						time: '18:00 - 21:00',
						description:
							'Vibraciones en Tesalónica: recorrido nocturno por un barrio auténtico.',
					},
				],
			},
			{
				day: 10,
				city: 'Tesalónica - Atenas',
				activities: [
					{
						time: '08:00',
						description: 'Desayuno opcional en el hotel.',
					},
					{
						time: '09:00',
						description:
							'Salida desde Tesalónica hacia Atenas en coche.',
					},
					{
						time: '13:00',
						description:
							'Llegada al aeropuerto para el vuelo de salida.',
					},
				],
			},
		],
		slug: 'grecia-atenas-tesalonica',
	},
	{
		id: 5,
		name: 'Italia, Roma - Florencia',
		description:
			'Con este paquete de vacaciones flexible, disfrutará visitando los principales sitios de Roma (la Ciudad Eterna, con su impresionante arquitectura como el Coliseo y el Foro Romano y su deliciosa comida) y Florencia (capital de la región de Toscana en Italia, hogar de muchas obras maestras del arte y la arquitectura renacentistas), degustando una comida increíble y viendo arte inspirador de siglos de artistas célebres.',
		price: 2800,
		currency: 'USD',
		allInclusive: true,
		durationDays: 9,
		destinations: ['Roma', 'Florencia'],
		slug: 'italia-roma-florencia',
		images: ['/img/italia/1.jpg', '/img/italia/2.jpg', '/img/italia/3.jpg'],
		itinerary: [
			{
				day: 1,
				city: 'Roma',
				activities: [
					{
						time: '12:00',
						description: 'Llegada a Italia (Roma).',
					},
					{
						time: '13:00',
						description: 'Llegada al Hotel (5 estrellas).',
					},
					{
						time: '13:30',
						description:
							'Almuerzo en el hotel o en un restaurante cercano.',
					},
					{
						time: '15:00',
						description:
							"Recorrido guiado en autobús privado sobre la temática de 'Ángeles y Demonios'.",
					},
					{
						time: '17:00',
						description:
							'Recorrido gastronómico por las calles de Roma con guía local.',
					},
					{
						time: '20:00',
						description: 'Regreso al Hotel.',
					},
					{
						time: '20:30',
						description:
							'Cena en el hotel o en un restaurante cercano.',
					},
				],
			},
			{
				day: 2,
				city: 'Roma',
				activities: [
					{
						time: '07:00',
						description: 'Desayuno.',
					},
					{
						time: '08:00',
						description: 'Salida del Hotel.',
					},
					{
						time: '08:30',
						description:
							'Visita privada a la Arena del Coliseo, Foro Romano, Piazza Navona y el Panteón.',
					},
					{
						time: '11:30',
						description:
							'Clase de pasta en Roma: una experiencia culinaria con un chef local.',
					},
					{
						time: '13:00',
						description: 'Regreso al Hotel.',
					},
					{
						time: '13:30',
						description:
							'Almuerzo en el hotel o en un restaurante cercano.',
					},
					{
						time: '15:30',
						description:
							'Safari por Chianti: tour por villas toscanas, degustación de vinos y quesos locales.',
					},
					{
						time: '19:30',
						description:
							'Tour nocturno en segway para grupos pequeños por Roma.',
					},
					{
						time: '21:00',
						description: 'Regreso al Hotel.',
					},
					{
						time: '21:30',
						description:
							'Cena en un restaurante cercano o en el hotel.',
					},
				],
			},
			{
				day: 3,
				city: 'Roma',
				activities: [
					{
						time: '07:00',
						description: 'Desayuno.',
					},
					{
						time: '08:00',
						description: 'Salida del Hotel.',
					},
					{
						time: '09:00',
						description:
							'Excursión a la costa de Amalfi, Positano y Pompeya.',
					},
					{
						time: '11:30',
						description:
							'Clase de cocina auténtica romana y experiencia en el mercado local.',
					},
					{
						time: '13:00',
						description: 'Regreso al hotel.',
					},
					{
						time: '13:30',
						description: 'Almuerzo.',
					},
					{
						time: '15:00',
						description: 'Visita guiada a los Museos Vaticanos.',
					},
					{
						time: '17:30',
						description:
							'Degustación de comida y vino en una bodega medieval en la campiña romana.',
					},
					{
						time: '20:00',
						description: 'Regreso al Hotel.',
					},
					{
						time: '20:30',
						description: 'Cena.',
					},
				],
			},
			{
				day: 4,
				city: 'Florencia',
				activities: [
					{
						time: '07:00',
						description: 'Desayuno.',
					},
					{
						time: '08:00',
						description:
							'Ida al aeropuerto para vuelo a Florencia.',
					},
					{
						time: '12:00',
						description:
							'Llegada a Florencia - Traslado al Hotel Balestri.',
					},
					{
						time: '20:00',
						description: 'Cena.',
					},
				],
			},
			{
				day: 5,
				city: 'Florencia',
				activities: [
					{
						time: '08:00',
						description: 'Desayuno.',
					},
					{
						time: '09:00',
						description: 'Salida del Hotel Balestri.',
					},
					{
						time: '10:00',
						description:
							'Clase de cocina y almuerzo en una granja Toscana con visita al mercado local.',
					},
					{
						time: '14:00',
						description: 'Regreso al hotel.',
					},
					{
						time: '20:00',
						description: 'Cena.',
					},
				],
			},
			{
				day: 6,
				city: 'Florencia',
				activities: [
					{
						time: '08:00',
						description:
							'Safari por Chianti: villas toscanas con viñedos, queso, vino y almuerzo desde Florencia.',
					},
					{
						time: '13:00',
						description: 'Llegada al hotel.',
					},
					{
						time: '15:30',
						description:
							'Excursiones de un día a Cinque Terre desde Florencia: Sol y descubrimiento.',
					},
					{
						time: '18:30',
						description:
							'Visita a la Galería de la Academia y la Galería Uffizi.',
					},
					{
						time: '21:00',
						description: 'Vuelta al Hotel.',
					},
					{
						time: '21:30',
						description: 'Cena.',
					},
				],
			},
			{
				day: 7,
				city: 'Florencia',
				activities: [
					{
						time: '08:00',
						description: 'Desayuno.',
					},
					{
						time: '09:30',
						description:
							'Recorrido privado a pie por la historia de la Segunda Guerra Mundial en Florencia.',
					},
					{
						time: '15:00',
						description:
							'Visita privada a la Galería de la Academia con guía de 5 estrellas.',
					},
					{
						time: '17:00',
						description:
							'Catas de vino, queso y aceite de oliva virgen extra en el sur de la Toscana.',
					},
					{
						time: '20:30',
						description: 'Vuelta al Hotel.',
					},
				],
			},
			{
				day: 8,
				city: 'Florencia',
				activities: [
					{
						time: '08:00',
						description: 'Desayuno.',
					},
					{
						time: '15:00',
						description:
							'Florencia arquitectónica: tour privado con un experto local.',
					},
					{
						time: '18:00',
						description: 'Aperitivo al atardecer en Florencia.',
					},
					{
						time: '20:00',
						description: 'Vuelta al Hotel.',
					},
				],
			},
			{
				day: 9,
				city: 'Florencia',
				activities: [
					{
						time: '07:00',
						description: 'Desayuno.',
					},
					{
						time: '08:00',
						description: 'Salida del hotel hacia el aeropuerto.',
					},
					{
						time: '09:00',
						description: 'Llegada al aeropuerto y check-in.',
					},
					{
						time: '10:30',
						description: 'Salida hacia el destino final.',
					},
				],
			},
		],
	},
];
