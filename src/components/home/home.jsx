import { Box, Button, ButtonGroup, Container, Stack, Text } from "@chakra-ui/react";
import { colors } from "../../constants";
import { ArrowLeftIcon, CheckCircleIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Home = () => {
    return (
        <>
                <Stack className="header" height={'60vh'} direction={'row'} alignItems={'center'} justifyContent={'space-between'} >
                    <Box width={'50%'}>
                        <Text as={'h1'} sx={{ fontSize: '3rem', fontWeight: 900, lineHeight: '1.55' }} >Ingliz tilini jaydari o'zbek tilida o'rgatamiz</Text>
                        <Text as={'p'} sx={{ margin: '15px 0 25px', fontSize: '1.2rem', fontWeight: '400', color: colors.secondary }} >- Leap English Online Academy</Text>
                        <ButtonGroup>
                            <Button className="btn">
                                <CheckCircleIcon />
                                <Text as={'span'} sx={{ margin: '0 7.5px' }} > Kurslar </Text>
                            </Button>
                            <Button className="btn">
                                <Text as={'span'} sx={{ margin: '0 7.5px' }}> Kursga yozilish </Text>
                                <ChevronRightIcon fontSize={'1.8rem'} />
                            </Button>
                        </ButtonGroup>
                    </Box>
                    <Box></Box>
                </Stack>
            <Box width={'100%'} display={'block'} sx={{ borderBottom: '1px solid rgb(206, 212, 218)' }}></Box>
        </>
    );
}

export default Home;