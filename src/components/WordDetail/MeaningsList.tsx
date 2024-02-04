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
		<section>
			<h3>Meaning</h3>
			<ul className={Styles.definitionsList}>
				{definitions.map((d) => (
					<li>
						{d.definition}
						{d.example && <span>"{d.example}"</span>}
					</li>
				))}
			</ul>
		</section>
	);
};

export default DefinitionsList;
