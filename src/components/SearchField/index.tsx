import { FormEvent, useState } from 'react';
import Icon from '../../assets/images/icon-search.svg?react';
import Styles from './index.module.scss';

const SearchField = () => {
	const [search, setSearch] = useState<string>('');

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
	};
	return (
		<form className={Styles.form} onSubmit={handleSubmit}>
			<input
				tabIndex={0}
				type="text"
				value={search}
				onChange={({ target: { value } }) => setSearch(value)}
			/>
			<button>
				<Icon />
			</button>
		</form>
	);
};

export default SearchField;
