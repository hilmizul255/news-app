import { Grid, Button, Typography, Box, Chip } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FaceIcon from '@mui/icons-material/Face';
// import data from '../data.json';


function Header(props) {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    const [isLogout, setIsLogout] = useState(false);

    const handleLogout = () => {
        setIsLogout(true);
        navigate('/');
    }

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSearch = () => {
        props.onSearch(searchInput);
        setSearchInput('');
    }

    return (
        <Grid container className="header section" zIndex={9999}>
            <Grid item lg={3} className="header__left"><Typography variant="h6">Find.My.News:)</Typography></Grid>
            <Grid item lg={6} className="header__right">

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>

                    <InputBase
                        placeholder="What do you want to search? (Ex. Bitcoin)"
                        value={searchInput}
                        onChange={handleChange}
                        className="search-input"
                        sx={{ color: '#333', backgroundColor: '#fff' }}
                    />

                    <Button
                        variant="contained"
                        onClick={handleSearch}
                        className="search-button"
                        size="small"
                        color="primary"
                    >
                        Search For News
                    </Button>

                </Box>
            </Grid>
            <Grid item lg={3} className="header__right" sx={{ display: 'flex', gap: .25, justifyContent: 'flex-end' }}>
                <Chip icon={<FaceIcon />} label={props.user?.userName} color="primary" />
                <Button variant="contained" size="small" onClick={handleLogout}>Logout</Button>
            </Grid>

        </Grid>
    );
}

export default Header;