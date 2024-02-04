import { Meaning } from '../../types';
import DefinitionsList from './MeaningsList';
import SynonymsList from './SynonymsList';
import Styles from './index.module.scss';

interface Props {
	meaning: Meaning | null;
}
const WordDetail = ({ meaning }: Props) => {
	if (!meaning) {
		return null;
	}
	return (
		<article className={Styles.container}>
			<h2 className={Styles.partOfSpeech}>{meaning.partOfSpeech}</h2>
			<DefinitionsList definitions={meaning.definitions} />

			<SynonymsList synonyms={meaning.synonyms} />
		</article>
	);
};

export default WordDetail;
