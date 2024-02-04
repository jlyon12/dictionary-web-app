import { NotFoundResponse } from './types';
export const isNotFoundResponse = (
	object: unknown
): object is NotFoundResponse => {
	return (
		object instanceof Object &&
		'message' in object &&
		'title' in object &&
		'resolution' in object
	);
};
