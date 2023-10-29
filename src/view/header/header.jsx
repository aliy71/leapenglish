import { Box, Container, Stack, Typography } from "@mui/material";
import { COLORS } from "../../constants";
import { Button } from "../../components";
import { btnUi } from "../../components/button/button-ui";
import { ChevronRight, FormatListNumbered } from "@mui/icons-material";

const Header = () => {
    return (
        <Container maxWidth={"90%"}>
            <Stack direction={"row"}>
                <Box width={"60%"}>
                    <Typography variant="h3" sx={{ fontWeight: "900" }}>
                        Ingliz tilini jaydari o'zbek tilida o'rgatamiz
                    </Typography>
                    <Typography
                        variant="subtitle3"
                        sx={{
                            display: "inline-block",
                            margin: "1.5rem 0",
                            fontSize: "1.2rem",
                            letterSpacing: "2px",
                            fontWeight: "400",
                            color: COLORS.secondaryBlack,
                        }}
                    >
                        - Leap English Online Academy
                    </Typography>
                    <Stack direction={"row"} gap={"1rem"}>
                        <Button
                            value={"kurslar"}
                            btnStyle={btnUi.btnLiner}
                            icons={{ descIcon: <FormatListNumbered /> }}
                        />
                        <Button
                            value={"kursga yozilish"}
                            btnStyle={btnUi.btnLiner}
                            icons={{ direIcon: <ChevronRight /> }}
                        />
                    </Stack>
                </Box>
                <Box></Box>
            </Stack>
        </Container>
    );
};

export default Header;
