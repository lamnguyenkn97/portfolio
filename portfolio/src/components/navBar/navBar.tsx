import {Stack, Link} from "@mui/material";


export const NavBar = () => {
    return(
        <Stack>
            <Link href={'/about-me'}>About me</Link>
            <Link href={'/projects'}>Projects</Link>
            <Link href={'/experience'}>Experience</Link>
        </Stack>
    )
}