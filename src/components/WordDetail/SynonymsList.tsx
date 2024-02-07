import { Meaning, NotFoundResponse, WordData } from '../../types';
import apiService from '../../services/api';
import Styles from './index.module.scss';
import { AxiosError } from 'axios';
import { isNotFoundResponse } from '../../utils';
interface Props {
	synonyms: Meaning['synonyms'];
	setWordData: React.Dispatch<React.SetStateAction<WordData | null>>;
	setError: React.Dispatch<
		React.SetStateAction<AxiosError | NotFoundResponse | null>
	>;
}

const SynonymsList = ({ synonyms, setWordData, setError }: Props) => {
	if (synonyms.length === 0) {
		return null;
	}

	const searchSynonym = async (synonym: string) => {
		setWordData(null);
		setError(null);

		try {
			const data = await apiService.getWordData(synonym);
			setWordData(data[0]);
		} catch (e) {
			if (e instanceof AxiosError && isNotFoundResponse(e.response?.data)) {
				return setError(e.response.data);
			}
			if (e instanceof AxiosError) {
				setError(e);
			}
		}
	};
	return (
		<>
			<h3>Synonyms</h3>
			<ul className={Styles.synonymsList}>
				{synonyms.map((s, i) => (
					<li key={i}>
						<button onClick={() => searchSynonym(s)}>{s}</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default SynonymsList;
