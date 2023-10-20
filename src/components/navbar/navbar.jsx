import { Box, List, ListItem, Stack } from "@chakra-ui/react";
import SocialIcons from "../social-icons/social-icons";
import { navbarLinkItem } from "../../constants";
import { NavbarLinkItem } from "..";

const Navbar = () => {
    return (
        <>
            <Stack maxWidth={'1440px'} direction={'row'} alignItems={'center'} justifyContent={'space-between'} className="navbar" >
                <Box width={'20%'} sx={{fontWeight: 700, fontSize: '1.25rem'}}>Leap English</Box>
                <List width={'60%'} sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:'2rem'}} >
                    { navbarLinkItem.map(link => <NavbarLinkItem key={link.id} link={link.link} />) }
                </List>
                <Box width={'20%'} >
                    <SocialIcons />
                </Box>
            </Stack>
            <Box width={'100%'} display={'block'} sx={{borderBottom: '1px solid rgb(206, 212, 218)'}}></Box>
        </>
     );
}
 
export default Navbar;