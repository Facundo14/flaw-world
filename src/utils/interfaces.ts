export interface TravelPackage {
	id: number;
	name: string;
	slug: string;
	description: string;
	price: number;
	images: string[];
	currency: string;
	allInclusive: boolean;
	durationDays: number;
	destinations: string[];
	itinerary: DayItinerary[];
}

export interface DayItinerary {
	day: number;
	city: string;
	activities: Activity[];
}

export interface Activity {
	time: string;
	description: string;
}
