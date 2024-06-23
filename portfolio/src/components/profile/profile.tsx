import React from 'react'
import {Grid, Stack, Typography} from "@mui/material";
import {NavBar} from "../navBar";
import {SocialNetworks} from "./components";


export const Profile = () => {
    return (
        <Stack justifyContent={'space-between'} sx={{border: '1px red solid', height: '100%'}}>
            <Stack>
                <Typography variant="h3" align="left">Lam Nguyen</Typography>
                <Typography variant="h6" align="left">Frontend Developer</Typography>
                <NavBar />
            </Stack>
            <SocialNetworks />
        </Stack>

    )
}