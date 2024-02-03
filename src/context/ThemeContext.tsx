import { createContext, useReducer } from 'react';
import { ACTIONTYPE, InitialStateType, ThemeContextType } from '../types';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialState: InitialStateType = {
	font: 'sans',
	darkMode: prefersDark,
};

const themeReducer = (state: InitialStateType, action: ACTIONTYPE) => {
	switch (action.type) {
		case 'SET_FONT':
			return {
				...state,
				font: action.payload,
			};
		case 'TOGGLE_DARKMODE':
			return {
				...state,
				darkMode: !state.darkMode,
			};
		default:
			return state;
	}
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
	const [state, dispatch] = useReducer(themeReducer, initialState);
	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeContextProvider };
