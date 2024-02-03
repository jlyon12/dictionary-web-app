import useThemeContext from './hooks/useThemeContext';
import Header from './components/Header';
import SearchField from './components/SearchField';
import WordHero from './components/WordHero';

function App() {
	const { state } = useThemeContext();
	return (
		<div
			className={
				state.darkMode
					? `dark-theme ${state.font}-theme app`
					: `light-theme ${state.font}-theme app`
			}
		>
			<div className="page-wrapper">
				<Header />
				<SearchField />
				<WordHero />
			</div>
		</div>
	);
}

export default App;
