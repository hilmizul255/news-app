import { Box, Button, Typography, Link } from "@mui/material";

function MyFavoritePanel({ favorites, clearFavorites }) {

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: .25 }}>
                <Typography variant="h6" color="primary.contrastText">My fav: {favorites.length}</Typography>
                <Button variant="contained" size="small" color="error" onClick={clearFavorites}>Clear</Button>
            </Box>
            <Typography variant="h4">My Favorite Panel</Typography>
            {favorites.map((item, index) => (
                <Box key={index} sx={{ padding: 1 }}>
                    <Link href={item.url} target="_blank">
                        <Typography variant="body2" color="primary.contrastText">{item.headline}</Typography>
                    </Link>
                </Box>
            ))}
        </Box>
    );
}

export default MyFavoritePanel;