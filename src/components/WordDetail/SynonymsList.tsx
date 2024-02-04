import { Meaning } from '../../types';
import Styles from './index.module.scss';
interface Props {
	synonyms: Meaning['synonyms'];
}

const SynonymsList = ({ synonyms }: Props) => {
	if (synonyms.length === 0) {
		return null;
	}
	return (
		<section>
			<h3>Synonyms</h3>
			<ul className={Styles.synonymsList}>
				{synonyms.map((s) => (
					<li>{s}</li>
				))}
			</ul>
		</section>
	);
};

export default SynonymsList;
