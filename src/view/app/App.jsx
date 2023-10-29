import { Stack } from "@mui/material";
import { COLORS } from "../../constants";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Lessons from "../lessons/lessons";

const App = () => {
  return ( 
    <Stack>
      <nav style={{borderBottom: `1px solid ${COLORS.secondaryBlack}`, backgroundColor: COLORS.primaryBg}}>
        <Navbar />
      </nav>
      <header style={{display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: `1px solid ${COLORS.secondaryBlack}`}}>
        <Header />
      </header>
      <main>
        <Lessons />
      </main>
    </Stack>
   );
}
 
export default App;