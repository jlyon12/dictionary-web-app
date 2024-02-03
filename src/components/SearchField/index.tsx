import { FormEvent, useState } from 'react';
import Icon from '../../assets/images/icon-search.svg?react';
import Styles from './index.module.scss';

const SearchField = () => {
	const [search, setSearch] = useState<string>('');
	const [error, setError] = useState<string | null>(null);
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		setError(null);
		if (search === '') {
			setError("Whoops, can't be empty");
		}
	};
	return (
		<div className={Styles.container}>
			<form className={Styles.form} onSubmit={handleSubmit}>
				<input
					className={error ? Styles.error : ''}
					tabIndex={0}
					type="text"
					value={search}
					placeholder="Search for any word..."
					onChange={({ target: { value } }) => setSearch(value)}
				/>
				<button>
					<Icon />
				</button>
			</form>
			{error && <p className={Styles.error}>{error}</p>}
		</div>
	);
};

export default SearchField;
