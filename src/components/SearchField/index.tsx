import { FormEvent, useState } from 'react';
import Icon from '../../assets/images/icon-search.svg?react';
import Styles from './index.module.scss';
import { NotFoundResponse, WordData } from '../../types';
import apiService from '../../services/api';
import { AxiosError } from 'axios';
import { isNotFoundResponse } from '../../utils';
interface Props {
	setWordData: React.Dispatch<React.SetStateAction<WordData | null>>;
	setError: React.Dispatch<
		React.SetStateAction<AxiosError | NotFoundResponse | null>
	>;
}
const SearchField = ({ setWordData, setError }: Props) => {
	const [search, setSearch] = useState<string>('');
	const [inputError, setInputError] = useState<string | null>(null);

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		setInputError(null);
		setWordData(null);
		setError(null);
		if (search === '') {
			setInputError("Whoops, can't be empty");
		}
		try {
			const data = await apiService.getWordData(search);
			setWordData(data[0]);
			setSearch('');
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
		<div className={Styles.container}>
			<form className={Styles.form} onSubmit={handleSubmit}>
				<input
					className={inputError ? Styles.error : ''}
					tabIndex={0}
					type="text"
					aria-label="search"
					value={search}
					placeholder="Search for any word..."
					onChange={({ target: { value } }) => setSearch(value)}
				/>

				<button aria-label="Search Word">
					<Icon aria-label="Search Icon" />
				</button>
			</form>
			{inputError && <p className={Styles.error}>{inputError}</p>}
		</div>
	);
};

export default SearchField;
