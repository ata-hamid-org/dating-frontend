import { Stack, useMediaQuery } from "@mui/material";
import SidebarMenu from "./components/SidebarMenu";
import MatchFinder from "./components/MatchFinder";
import LandingPage from "./pages/LandingPage";

function App() {
  const matches = useMediaQuery("(min-width:900px)");

  console.log({ matches });

  return (
    <Stack direction="row" sx={{ minHeight: "100vh" }}>
      {matches && <SidebarMenu />}
      <MatchFinder />
    </Stack>
    // <LandingPage />
  );
}

export default App;
