import { Grid, Box, Typography, Link, Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import { fetchNews } from '../api/newsApi';
import NewsItem from "./NewsItem";

function DisplayResult(props) {
    const [articles, setArticles] = useState([]);
    const [isValidSearch, setIsValidSearch] = useState('');
    const [visibleCount, setVisibleCount] = useState(12);



    useEffect(() => {
        const getNews = async () => {
            try {
                setVisibleCount(12);
                if (props.searchResult !== '') {
                    const newsData = await fetchNews(props.searchResult);

                    const formattedData = newsData.map(article => ({
                        websiteName: article.source.name,
                        newsAvatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
                        time: article.publishedAt,
                        image: article.urlToImage,
                        headline: article.title.slice(0, 90),
                        url: article.url
                    })).filter(article => article.headline && article.headline.toLowerCase().includes(props.searchResult.toLowerCase()));

                    if (formattedData.length > 0) {
                        setIsValidSearch('showResult');
                        setArticles(formattedData);
                    } else {
                        setIsValidSearch('showError');
                    }
                } else if (props.searchResult === '') {
                    setIsValidSearch('showInstruction');
                } else {
                    setIsValidSearch('showError');
                }
            } catch (error) {
                console.error("Error in DisplayResult:", error);
            }
        };

        getNews()
    }, [props.searchResult]);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 12);
    }

    return (<>

        {isValidSearch === 'showResult' ? (
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h6" color="white">Latest News for {props.searchResult}</Typography>
                <Grid container spacing={2} >
                    {articles.slice(0, visibleCount).map((item, index) => (
                        <NewsItem item={item} addToFavorites={props.addToFavorites} key={index} />
                    ))}
                </Grid>
                {visibleCount < articles.length && (
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Button onClick={handleLoadMore} variant="contained" size="small">Load More...</Button>
                    </Box>
                )}
            </Box>
        ) : isValidSearch === 'showError' ? (
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', height: '100%' }}>
                <Typography variant="h6" color="white">Latest News for {props.searchResult}</Typography>
                <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Typography variant="h3" color="white">Sorry. We could't find any news for your search :(</Typography>
                </Box>
            </Box>
        ) : (
            <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Typography variant="h3" color="white">Please search for your favorite news topic to get started :) </Typography>
            </Box>
        )}
    </>
    );
}

export default DisplayResult;