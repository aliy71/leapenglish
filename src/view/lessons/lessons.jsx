import { Box, Container, Stack, Typography } from "@mui/material";
import { LessonItem } from "../../components";

const Lessons = () => {
    return ( 
        <Container maxWidth={'90%'}>
            
            <Stack>
                <Box>Video player</Box>
                <LessonItem />
            </Stack>
        </Container>
     );
}
 
export default Lessons;