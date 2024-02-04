import { AxiosError } from 'axios';
import Styles from './index.module.scss';
import { NotFoundResponse } from '../../types';
import { isNotFoundResponse } from '../../utils';

interface Props {
	error: AxiosError | NotFoundResponse;
}
const Error = ({ error }: Props) => {
	if (isNotFoundResponse(error))
		return (
			<section className={Styles.container}>
				<p>😕</p>
				<h2>{error.title}</h2>
				<p>{error.message}</p>
			</section>
		);
};

export default Error;
