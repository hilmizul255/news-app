import axios from 'axios';

export const fetchNews = async (searchResult) => {
    try {
        const query = searchResult || 'latest';
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=9adb73fa559b4fb2b1db74bfe0e34f40`);
        return response.data.articles;
    } catch (error) {
        throw error;
    }
};
