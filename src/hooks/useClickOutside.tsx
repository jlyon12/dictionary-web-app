import { useRef, useEffect } from 'react';

const useClickOutside = (callback: () => void) => {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
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
