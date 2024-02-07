import { Meaning } from '../../types';
import Styles from './index.module.scss';

interface Props {
	definitions: Meaning['definitions'];
}

const DefinitionsList = ({ definitions }: Props) => {
	if (definitions.length === 0) {
		return null;
	}
	return (
		<>
			<h3>Meaning</h3>
			<ul className={Styles.definitionsList}>
				{definitions.map((d, i) => (
					<li key={i}>
						{d.definition}
						{d.example && <span>"{d.example}"</span>}
					</li>
				))}
			</ul>
		</>
	);
};

export default DefinitionsList;
