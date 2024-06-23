import React from 'react'
import {Grid, Stack, Typography} from "@mui/material";
import {NavBar} from "../navBar";
import {SocialNetworks} from "./components/socialNetworks";


export const Profile = () => {
    return (
        <Stack alignItems={'center'} boxSizing={"border-box"} justifyContent={"space-between"}  sx={{border: '1px red solid', height: '100%', pt: 5, pb: 5}}>
            <Stack>
                <Typography fontWeight={'bold'} variant="h3" align="left">Lam Nguyen</Typography>
                <Typography variant="h6" align="left" >Frontend Developer</Typography>
                <Typography variant="body1" align="left" sx={{mb: 5}}>I build pixel-perfect, engaging, and accessible digital experiences.</Typography>
                <NavBar />
            </Stack>
            <SocialNetworks />
        </Stack>

    )
}