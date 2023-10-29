import { List } from "@mui/icons-material";
import { Box, ListItem, ListItemText, Stack, Typography } from "@mui/material";

const Carousel = ({ data, price, idx, prev }) => {
    console.log(idx);
    return ( 
        <Stack key={`${idx}course`} className="carousel_item" sx={{transform: `translateX(${prev * -100}%)`}}>
            { data.map((lesson, idx) => {
                console.log(lesson);
                return (
                    <Stack>
                        <ListItemText key={`${idx}q`}>{ lesson.title }</ListItemText>
                        {lesson?.data?.map((tr, idx) => <Typography component={"li"} key={`${idx}tr`} >{tr.title}</Typography >)}
                    </Stack>
                )
            }) }
            <ListItemText>{price}</ListItemText>
        </Stack>
     );
}
 
export default Carousel;