import Styles from './index.module.scss';

interface Props {
	isOn: boolean;
	label: string;
	handleChange: () => void;
}
const Switch = ({ isOn, label, handleChange }: Props) => {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.code === 'Space' || e.code === 'Enter') {
			return handleChange();
		}
	};

	return (
		<>
			<input
				className={Styles.checkbox}
				type="checkbox"
				checked={isOn}
				id={label}
				name={label}
				onChange={handleChange}
				role="switch"
			></input>
			<label
				className={Styles.label}
				htmlFor={label}
				tabIndex={0}
				onKeyDown={handleKeyDown}
			>
				<span className={Styles.btn}></span>
			</label>
		</>
	);
};

export default Switch;
