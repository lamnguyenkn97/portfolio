import React from 'react';
import {Outlet} from "react-router-dom";
import {Profile} from "./components/profile";
import {Container, Grid, Typography} from "@mui/material";


function App() {
    return (
        <Grid container className="App" height={'100vh'}>
            <Grid item xs={3}>
                <Profile />
            </Grid>
            <Grid item flexGrow={9}>
                <Typography variant={'h3'}>Context</Typography>
            </Grid>
            <Outlet />
        </Grid>
    );
}

export default App;
