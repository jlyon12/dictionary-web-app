import { AxiosError } from 'axios';
import { Meaning, NotFoundResponse, WordData } from '../../types';
import DefinitionsList from './MeaningsList';
import SynonymsList from './SynonymsList';
import Styles from './index.module.scss';

interface Props {
	meaning: Meaning | null;
	setWordData: React.Dispatch<React.SetStateAction<WordData | null>>;
	setError: React.Dispatch<
		React.SetStateAction<AxiosError | NotFoundResponse | null>
	>;
}
const WordDetail = ({ meaning, setWordData, setError }: Props) => {
	if (!meaning) {
		return null;
	}
	return (
		<article className={Styles.container}>
			<h2 className={Styles.partOfSpeech}>{meaning.partOfSpeech}</h2>
			<DefinitionsList definitions={meaning.definitions} />

			<SynonymsList
				synonyms={meaning.synonyms}
				setWordData={setWordData}
				setError={setError}
			/>
		</article>
	);
};

export default WordDetail;
