import { Grid, Box, Typography, Link } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

function DisplayResult() {

    const tempData = [
        {
            websiteName: "Source 1",
            newsAvatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
            time: "2022-06-01",
            image: "https://images.pexels.com/photos/1277211/pexels-photo-1277211.jpeg",
            headline: "Test Headline 1 Test Headline 1",
            url: "https://www.google.com"
        },
        {
            websiteName: "Source 2",
            newsAvatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
            time: "2022-06-01",
            image: "https://images.pexels.com/photos/34676888/pexels-photo-34676888.jpeg",
            headline: "Test Headline 2 Test Headline 2",
            url: "https://www.google.com"
        },
        {
            websiteName: "Source 3",
            newsAvatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
            time: "2022-06-01",
            image: "https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg",
            headline: "Test Headline 3 Test Headline 3",
            url: "https://www.google.com"
        },
        {
            websiteName: "Source 1",
            newsAvatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
            time: "2022-06-01",
            image: "https://images.pexels.com/photos/1277211/pexels-photo-1277211.jpeg",
            headline: "Test Headline 1 Test Headline 1",
            url: "https://www.google.com"
        },
        {
            websiteName: "Source 2",
            newsAvatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
            time: "2022-06-01",
            image: "https://images.pexels.com/photos/34676888/pexels-photo-34676888.jpeg",
            headline: "Test Headline 2 Test Headline 2",
            url: "https://www.google.com"
        },
        {
            websiteName: "Source 3",
            newsAvatar: "https://cdn.pixabay.com/phot   o/2023/02/18/11/00/icon-7797704_640.png",
            time: "2022-06-01",
            image: "https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg",
            headline: "Test Headline 3 Test Headline 3",
            url: "https://www.google.com"
        }
    ]

    return (
        <Grid container spacing={2}>
            {tempData.map((item, index) => (
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
                                <Typography variant="body2">{item.time}</Typography>
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
    );
}

export default DisplayResult;