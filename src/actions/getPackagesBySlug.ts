import { packages } from '../utils/packages';

export const getPackagesBySlug = (slug: string) => {
	const response = packages.find((p) => p.slug === slug);
	if (!response) {
		throw new Error('Package not found');
	}
	return response;
};
