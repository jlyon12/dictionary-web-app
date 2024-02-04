// API related types

interface Definition {
	definition: string;
	example: string;
	synonyms: string[];
	antonyms: string[];
}

export interface Meaning {
	partOfSpeech: string;
	synonyms: string[];
	antonyms: string[];
	definitions: Definition[];
}

export interface WordData {
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

export interface NotFoundResponse {
	message: string;
	resolution: string;
	title: string;
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
