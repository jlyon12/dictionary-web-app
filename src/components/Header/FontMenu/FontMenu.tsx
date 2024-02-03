import { useState } from 'react';
import DownArrow from '../../../assets/images/icon-arrow-down.svg?react';
import useThemeContext from '../../../hooks/useThemeContext';
import useClickOutside from '../../../hooks/useClickOutside';
import { FontFamily } from '../../../types';
import Styles from './FontMenu.module.scss';

const FontMenu = () => {
	const { state, dispatch } = useThemeContext();
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleMenu = () => {
		setIsExpanded(!isExpanded);
	};

	const setFont = (fontFamily: FontFamily) => {
		dispatch({ type: 'SET_FONT', payload: fontFamily });
		toggleMenu();
	};

	const handleClickOutside = () => {
		if (isExpanded) {
			setIsExpanded(false);
		}
	};
	const ref = useClickOutside(handleClickOutside);

	return (
		<div className={Styles.container}>
			<button onClick={toggleMenu} className={Styles.btn} ref={ref}>
				<p>{state.font}</p>
				<span className={Styles.hidden}>show menu for font setting</span>
				<DownArrow />
			</button>
			{isExpanded && (
				<ul aria-expanded={isExpanded} className={Styles.list}>
					<li>
						<button onClick={() => setFont('sans')}>Sans Serif</button>
					</li>
					<li>
						<button onClick={() => setFont('serif')}>Serif</button>
					</li>
					<li>
						<button onClick={() => setFont('mono')}>Mono</button>
					</li>
				</ul>
			)}
		</div>
	);
};

export default FontMenu;
