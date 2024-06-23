import {Stack, Link} from "@mui/material";


export const NavBar = () => {
    return(
        <Stack justifyContent={"space-evenly"}>
            <Link sx={{mb: 2}} href={'/about-me'}>About me</Link>
            <Link sx={{mb: 2}} href={'/projects'}>Projects</Link>
            <Link href={'/experience'}>Experience</Link>
        </Stack>
    )
}