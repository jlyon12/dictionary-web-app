import { useState } from 'react';
import useThemeContext from './hooks/useThemeContext';
import Header from './components/Header';
import SearchField from './components/SearchField';
import WordHero from './components/WordHero';
import WordDetail from './components/WordDetail';
import Error from './components/Error';
import { NotFoundResponse, WordData } from './types';
import { AxiosError } from 'axios';
import WordSource from './components/WordSource/WordSource';

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
				<main className="content-wrapper">
					<SearchField setWordData={setWordData} setError={setError} />
					<WordHero wordData={wordData} />
					{wordData?.meanings.map((m, i) => (
						<WordDetail
							key={i}
							meaning={m}
							setWordData={setWordData}
							setError={setError}
						/>
					))}
					<WordSource wordData={wordData} />
					{error && <Error error={error} />}
				</main>
			</div>
		</div>
	);
}

export default App;
