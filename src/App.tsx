import Header from './components/Header';
import SearchField from './components/SearchField';
import useThemeContext from './hooks/useThemeContext';

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
			</div>
		</div>
	);
}

export default App;
