import axios from 'axios';

export const fetchNews = async (searchResult) => {
    try {
        const query = searchResult || 'latest';
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
        return response.data.articles;
    } catch (error) {
        throw error;
    }
};
