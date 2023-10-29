import { ListItem } from "@mui/material";
import { COLORS } from "../../constants";

const NavItem = ({ title }) => {
    return ( 
        <ListItem sx={{width: '17.5%', textTransform: 'capitalize', color: COLORS.secondaryBlack, cursor: 'pointer'}} >{title}</ListItem>
    );
}
 
export default NavItem;