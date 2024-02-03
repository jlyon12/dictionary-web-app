import Logo from '../../assets/images/logo.svg?react';
import MoonIcon from '../../assets/images/icon-moon.svg?react';
import useThemeContext from '../../hooks/useThemeContext';
import Switch from '../ui/Switch';
import FontMenu from './FontMenu/FontMenu';

import Styles from './index.module.scss';
const Header = () => {
	const { state, dispatch } = useThemeContext();

	return (
		<header className={Styles.container}>
			<Logo width={32} height={32} />

			<div className={Styles.toggleContainer}>
				<FontMenu />
				<hr />
				<Switch
					isOn={state.darkMode}
					handleChange={() => dispatch({ type: 'TOGGLE_DARKMODE' })}
					label="toggle-darkmode"
				/>
				<MoonIcon
					className={state.darkMode ? Styles.activeIcon : Styles.inactiveIcon}
				/>
			</div>
		</header>
	);
};

export default Header;
