import { useEffect, useRef, useState } from "react";
import { courseData } from "../../constants/course_mock_data";
import Title from "../title/title";
import Carousel from "../carousel/carousel";
import { Box, IconButton, Stack } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const LessonItem = () => {
    const [prev, setPrev] = useState(0)
    const [prevDisabled, setPrevDisabled] = useState(false)
    const [BackDisabled, setBackDisabled] = useState(true)
    const courseTrafic = useRef(courseData)

    const prevHandlerFn = () => prev !== courseData.length - 1 ? setPrev(prev => prev += 1) : '' 
    

    const backHandlerFn = () => prev !== 0 ? setPrev(back => back -= 1) : ''
    
    useEffect(() => {
        if( prev === courseData.length -1 ) {
            setPrevDisabled(true)
            setBackDisabled(false)
        }
        else if( prev === 0 ) {
            setPrevDisabled(false)
            setBackDisabled(true)
        }
        else {
            setPrevDisabled(false)
            setBackDisabled(false)
        }
    }, [prev])

    return ( 
        <>
            <Title value={`Tariflar - ${courseData.length} ta`} />
            <Stack className="carousel" direction={'row'}>
                {
                    courseData.map((course, idx) => {
                        return <Carousel 
                                key={course.name} 
                                price={course.price} 
                                data={course.data} 
                                idx={idx} 
                                prev={prev} 
                            />
                    })
                }
                <Box className="controller">
                    <IconButton className={BackDisabled ? 'hide' : ''} onClick={() => backHandlerFn()}>
                        <ChevronLeft/>
                    </IconButton>
                    <IconButton className={prevDisabled ? 'hide' : ''} onClick={() => prevHandlerFn()}>
                        <ChevronRight />    
                    </IconButton>
                </Box>
            </Stack>
        </>   
     );
}
 
export default LessonItem;