import { ButtonBase, Typography } from "@mui/material";

const Button = ({ value, btnStyle, icons }) => {
    return (
        <ButtonBase sx={{...btnStyle,display: 'flex', alignItems: 'center', gap: '.5rem', textTransform: 'capitalize'}}> 
            {icons?.descIcon}  
            <Typography variant="subtitle3">{value}</Typography>
            {icons?.direIcon} 
        </ButtonBase>
     );
}
 
export default Button;