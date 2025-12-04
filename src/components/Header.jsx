import { Grid, Button, Typography, Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Header() {

    const navigate = useNavigate();
    const [isLogout, setIsLogout] = useState(false);

    const handleLogout = () => {
        setIsLogout(true);
        navigate('/');
    }


    return (
        <Grid container className="header section">
            <Grid item lg={3} className="header__left"><Typography variant="h6">Find My News</Typography></Grid>
            <Grid item lg={6} className="header__right">

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>

                    <InputBase
                        placeholder="What do you want to search? (Ex. Bitcoin)"
                        // value={searchInput}
                        // onChange={(e) => setSearchInput(e.target.value)}
                        className="search-input"
                        sx={{ color: '#333', backgroundColor: '#fff' }}
                    />

                    <Button
                        variant="contained"
                        // onClick={handleSearch}
                        className="search-button"
                        size="small"
                    >
                        Search
                    </Button>

                </Box>
            </Grid>
            <Grid item lg={3} className="header__right" sx={{ display: 'flex', gap: .25, justifyContent: 'flex-end' }}>
                <Button variant="contained" size="small">Hilmi!</Button>
                <Button variant="contained" size="small" onClick={handleLogout}>Logout</Button>
            </Grid>

        </Grid>
    );
}

export default Header;