import { Button, Text } from "@chakra-ui/react";

const Btn = ({icon, value, style}) => {
    return ( 
        <Button sx={...style}>
            { icon } <Text as={'span'} > {value} </Text>
        </Button>
     );
}
 
export default Btn;