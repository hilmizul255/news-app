import { Grid, Box, Typography, Link } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import { fetchNews } from '../api/newsApi';

function DisplayResult({ searchResult }) {
    const [articles, setArticles] = useState([]);
    const [isValidSearch, setIsValidSearch] = useState(false);



    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await fetchNews(searchResult);

                const formattedData = newsData.map(article => ({
                    websiteName: article.source.name,
                    newsAvatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
                    time: article.publishedAt,
                    image: article.urlToImage,
                    headline: article.title,
                    url: article.url
                }));

                setArticles(formattedData);
            } catch (error) {
                console.error("Error in DisplayResult:", error);
            }
        };

        getNews()
    }, [searchResult]);

    return (<>

        {isValidSearch ? (
            <Grid container spacing={2}>
                {articles.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3}>

                        <Box backgroundColor="primary.contrastText" outline="1px solid #ccc" p={1} borderRadius={1} >

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: .25, width: "45px", height: "45px", borderRadius: '50%', overflow: 'hidden' }}>
                                    <img src={item.newsAvatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                                <Box>
                                    <Link href={item.url} target="_blank">
                                        <Typography variant="h6">{item.websiteName}</Typography>
                                    </Link>
                                    <Typography variant="body2">{new Date(item.time).toLocaleDateString()}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', width: '100%', height: '200px', overflow: 'hidden' }}>
                                <img src={item.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                            <Box sx={{ padding: 1 }}>
                                <Typography variant="body2">{item.headline}</Typography>
                                <FavoriteIcon />
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        ) : (
            <Typography variant="h5" color="secondary">Please search for your favorite news topic to get started :) </Typography>
        )}
    </>
    );
}

export default DisplayResult;