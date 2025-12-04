import { Box, Typography } from "@mui/material";

function MyFavoritePanel() {

    const tempHeadlines = [
        {
            headline: "Test Headline 1 Test Headline 1"
        },
        {
            headline: "Test Headline 2 Test Headline 2"
        },
        {
            headline: "Test Headline 3 Test Headline 3"
        }
    ]

    return (
        <Box>
            <Typography variant="h6">My Favorite Panel</Typography>
            {tempHeadlines.map((item, index) => (
                <Box key={index} sx={{ padding: 1 }}>
                    <Typography variant="body2" color="primary.contrastText">{item.headline}</Typography>
                </Box>
            ))}
        </Box>
    );
}

export default MyFavoritePanel;