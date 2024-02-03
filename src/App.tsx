import Header from './components/Header';
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
			</div>
		</div>
	);
}

export default App;
