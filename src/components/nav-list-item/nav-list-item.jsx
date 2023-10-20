import { ListItem } from "@chakra-ui/react";
import { colors } from "../../constants";

const NavbarListItem = ({ link }) => {
    return ( 
        <ListItem sx={{color: colors.secondary}}>{link}</ListItem>
     );
}
 
export default NavbarListItem;