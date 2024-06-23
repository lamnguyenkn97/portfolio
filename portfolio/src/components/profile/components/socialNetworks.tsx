import {Link, Stack} from "@mui/material";
import {Facebook, GitHub, LinkedIn} from "@mui/icons-material";
import React from "react";


export const SocialNetworks = () => {
    return(
        <Stack direction={"row"}>
            <Link href={'facebook.com'}><Facebook /></Link>
            <Link href={'linkedin.com'}><LinkedIn /></Link>
            <Link href={'github.com'}><GitHub /></Link>
        </Stack>
    )
}