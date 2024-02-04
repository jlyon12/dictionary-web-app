import { useState } from 'react';
import useThemeContext from './hooks/useThemeContext';
import Header from './components/Header';
import SearchField from './components/SearchField';
import WordHero from './components/WordHero';
import { NotFoundResponse, WordData } from './types';
import { AxiosError } from 'axios';

function App() {
	const { state } = useThemeContext();
	const [wordData, setWordData] = useState<WordData | null>(null);
	const [error, setError] = useState<AxiosError | NotFoundResponse | null>(
		null
	);
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
				<SearchField setWordData={setWordData} setError={setError} />
				<WordHero wordData={wordData} />
			</div>
		</div>
	);
}

export default App;
