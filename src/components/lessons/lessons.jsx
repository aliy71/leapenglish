import { Stack, Text } from "@chakra-ui/react";
import { Carousel, CarouselSlide } from "@mantine/carousel";

const Lessons = () => {
    return (
        <>
            <Text as={'h3'} > Tariflar - 7 ta </Text>
            <Carousel 
                withIndicators
                height={"200px"}
                slideSize="33.333333%"
                slideGap="md"
                loop
                align="start"
                slidesToScroll={3}>
                <CarouselSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima inventore illo ab a delectus, porro adipisci repellat dignissimos maxime corrupti, neque deserunt voluptatum impedit sapiente quas nostrum minus expedita!</CarouselSlide>
                <CarouselSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dicta ratione? Deserunt laboriosam saepe, amet veniam, inventore cum illum ad repellendus sit eaque adipisci soluta vel? Fuga non iusto ex.</CarouselSlide>
                <CarouselSlide>3</CarouselSlide>
            </Carousel>
        </>
    );
}

export default Lessons;