// API related types

interface Definition {
	definition: string;
	example: string;
	synonyms: string[];
	antonyms: string[];
}

interface Meaning {
	partOfSpeech: string;
	definitions: Definition[];
}

export interface Response {
	word: string;
	phonetic: string;
	phonetics: [
		{
			text: string;
			audio: string;
		},
		{
			text: string;
		},
	];
	origin: string;
	meanings: Meaning[];
}

// Theme Context related types

export type FontFamily = 'sans' | 'serif' | 'mono';

export interface ThemeContextType {
	state: InitialStateType;
	dispatch: React.Dispatch<ACTIONTYPE>;
}

export interface InitialStateType {
	font: FontFamily;
	darkMode: boolean;
}

export type ACTIONTYPE =
	| { type: 'SET_FONT'; payload: FontFamily }
	| { type: 'TOGGLE_DARKMODE' };
