import { Box, Stack, Typography } from "@mui/material";
import { COLORS, NAVBAR, SOCIALMEDIA } from "../../constants";
import { NavItem, SocialMedia } from "../../components";

const Navbar = () => {
    return ( 
        <Box className="navbar">
            <Stack  direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Box width={'30%'}>
                    <Typography variant="h3" sx={{fontSize: '1.5rem', fontWeight: 800, color: COLORS.primaryBlack }}>Leap English</Typography>
                </Box>
                <Stack width={'40%'} direction={'row'} alignItems={'center'} justifyContent={'center'} component={'ul'}>
                    {
                        NAVBAR.map(nav => <NavItem key={nav.path} title={nav.title} />)
                    }
                </Stack>
                <Stack width={"30%"} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    {
                        SOCIALMEDIA.map(sm => <SocialMedia key={sm.alt} icon={sm.icon} path={sm.path} />)
                    }
                </Stack>
            </Stack>
        </Box>
     );
}
 
export default Navbar;