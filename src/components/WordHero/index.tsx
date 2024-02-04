import Styles from './index.module.scss';
import PlayIcon from '../../assets/images/icon-play.svg?react';
import { WordData } from '../../types';

interface Props {
	wordData: WordData | null;
}
const WordHero = ({ wordData }: Props) => {
	if (!wordData) {
		return null;
	}
	// Ensure playIcon does not appear for word without available audio
	const soundFileUrl = wordData.phonetics[0].audio;

	const playSound = () => {
		const sound = new Audio(soundFileUrl);
		sound.play();
	};

	return (
		<div className={Styles.container}>
			<div className={Styles.wordContainer}>
				<h1>{wordData.word}</h1>
				<p>{wordData.phonetic}</p>
			</div>
			{soundFileUrl && (
				<button onClick={playSound}>
					<PlayIcon height={48} width={48} />
				</button>
			)}
		</div>
	);
};

export default WordHero;
