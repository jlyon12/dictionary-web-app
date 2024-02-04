import axios from 'axios';
import { WordData } from '../types';
const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const getWordData = async (word: string): Promise<WordData[]> => {
	const res = await axios.get<WordData[]>(baseUrl + word);
	return res.data;
};

export default {
	getWordData,
};
