import Header from "./Header";
import Grid from "@mui/material/Grid";
import MyFavoritePanel from "./MyFavouritePanel";
import DisplayResult from "./DisplayResult";

function Home() {
    return (
        <>

            <Grid container className="main-container bg-img" direction="column">
                <Grid className="header-container" item lg={1} style={{ maxHeight: "10vh" }}><Header /></Grid>
                <Grid className="content-container section" item lg={11}>
                    <Grid container direction="row">
                        <Grid item lg={3}>
                            <MyFavoritePanel />
                        </Grid>
                        <Grid item lg={9}>
                            <DisplayResult />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
