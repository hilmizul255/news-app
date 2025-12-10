import { Grid, Box, Typography, Link, Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

function NewsItem({ item, addToFavorites }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Box
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    backgroundColor: "white",
                    border: isHovered ? "2px solid orange" : "1px solid #ccc",
                    p: 1,
                    borderRadius: 1,
                    height: "400px",
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border 0.3s ease',
                    position: 'relative'
                }}
            >
                {/* Default content */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: .25, width: "45px", height: "45px", borderRadius: '50%', overflow: 'hidden' }}>
                        <img src={item.newsAvatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box>
                        <Link href={item.url} target="_blank" underline="none">
                            <Typography variant="h6" color="black">{item.websiteName}</Typography>
                        </Link>
                        <Typography variant="body2">{new Date(item.time).toLocaleDateString()}</Typography>
                    </Box>
                </Box>

                {/* Hover content */}
                <Box sx={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    {!isHovered ? (
                        <>
                            <Box sx={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                                <img src={item.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                            <Box sx={{ padding: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Typography variant="body2">{item.headline}</Typography>
                                <FavoriteIcon color="error" onClick={() => addToFavorites(item)} style={{ cursor: 'pointer' }} />
                            </Box>
                        </>
                    ) : (
                        <Box className="fade-up" sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            p: 2,
                            gap: 2
                        }}>
                            <Typography variant="p">{item.headline}</Typography>

                            <Button variant="contained" href={item.url} target="_blank" fullWidth>
                                Read Article
                            </Button>

                            <Box sx={{ mt: 'auto', pt: 2 }}>
                                <FavoriteIcon color="error" onClick={() => addToFavorites(item)} style={{ cursor: 'pointer' }} />
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Grid>
    );
}

export default NewsItem;
