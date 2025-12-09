import { Grid, Box, Typography, Link } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

function NewsItem({ item, addToFavorites }) {
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Box backgroundColor="primary.contrastText" outline="1px solid #ccc" p={1} borderRadius={1} height="400px" >

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
                    <FavoriteIcon onClick={() => addToFavorites(item)} style={{ cursor: 'pointer' }} />
                </Box>
            </Box>
        </Grid>
    );
}

export default NewsItem;
