import Styles from './index.module.scss';
import PlayIcon from '../../assets/images/icon-play.svg?react';
const WordHero = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.wordContainer}>
				<h1>keyboard</h1>
				<p>/ˈkiːbɔːd/</p>
			</div>
			<button>
				<PlayIcon height={48} width={48} />
			</button>
		</div>
	);
};

export default WordHero;
