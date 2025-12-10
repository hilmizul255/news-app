import Header from "./Header";
import useLocalStorage from "../hooks/useLocalStorage";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MyFavoritePanel from "./MyFavouritePanel";
import DisplayResult from "./DisplayResult";
import { useState, useEffect } from "react";

function Home() {
    const location = useLocation();
    const user = location.state?.user || { userName: 'Guest' };

    const [searchResult, setSearchResult] = useState('');
    const [favorites, setFavorites] = useLocalStorage('my-favourites', []);

    const handleSearch = (searchTerm) => {
        setSearchResult(searchTerm);
    }

    const addToFavorites = (article) => {
        if (!favorites.some(fav => fav.url === article.url)) {
            setFavorites([...favorites, article]);
        }
    }

    const clearFavorites = () => {
        setFavorites([]);
    }

    return (
        <>
            <Grid container className="main-container" direction="column">
                <Grid className="header-container" item lg={1} sx={{ maxHeight: "10vh", justifyContent: 'center', display: 'flex' }}><Header onSearch={handleSearch} searchResult={searchResult} user={user} /></Grid>
                <Grid className="content-container " item lg={11}>
                    <Grid container spacing={2} direction="row" height="100%" minHeight="100vh">
                        <Grid item lg={2.5} className="bg-img" sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%' }}>
                            <MyFavoritePanel favorites={favorites} clearFavorites={clearFavorites} />
                        </Grid>
                        <Grid item lg={9.5} className="bg-img" >
                            <DisplayResult searchResult={searchResult} addToFavorites={addToFavorites} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
