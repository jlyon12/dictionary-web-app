import { useRef, useEffect } from 'react';

const useClickOutside = (callback: () => void) => {
	const ref = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (
				ref.current &&
				!ref.current?.contains(event.target as HTMLButtonElement)
			) {
				callback();
			}
		};
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, [callback]);

	return ref;
};

export default useClickOutside;
