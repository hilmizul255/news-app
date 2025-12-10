import { Box, Button, Typography, Link } from "@mui/material";
import { useState } from "react";

function MyFavoritePanel({ favorites, clearFavorites }) {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    }

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    }



    return (
        <Box sx={{ padding: 1, gap: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: .25 }}>
                <Typography variant="h6" color="white">My Favorite: {favorites.length}</Typography>
                <Button variant="contained" size="small" color="primary" onClick={clearFavorites}>Clear</Button>
            </Box>
            <Typography variant="h4" color="white">My Favorite Panel</Typography>
            {favorites.map((item, index) => (
                <Box key={index} sx={{ padding: 1 }} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} style={{ backgroundColor: hoveredIndex === index ? "orange" : "" }}>
                    <Link href={item.url} target="_blank">
                        <Typography variant="p" color="white">{item.headline}</Typography>
                    </Link>
                </Box>
            ))}
        </Box>
    );
}

export default MyFavoritePanel;