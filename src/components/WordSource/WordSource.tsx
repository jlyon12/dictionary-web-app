import LinkIcon from '../../assets/images/icon-new-window.svg?react';
import { WordData } from '../../types';
import Styles from './index.module.scss';

interface Props {
	wordData: WordData | null;
}

const WordSource = ({ wordData }: Props) => {
	if (!wordData) {
		return null;
	}
	return (
		<>
			<hr />
			<div className={Styles.container}>
				<p>Source</p>
				<a href={wordData.sourceUrls[0]}>{wordData.sourceUrls[0]}</a>
				<LinkIcon />
			</div>
		</>
	);
};

export default WordSource;
