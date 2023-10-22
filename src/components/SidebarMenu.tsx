import { Box, Stack } from "@mui/material";
import ProfileNav from "./ProfileNav";
import DatingDashboard from "./DatingDashboard";

function SidebarMenu() {
  return (
    <Stack component="aside" width={360}>
      <ProfileNav />
      <Box flex={1} bgcolor="white">
        <DatingDashboard />
      </Box>
    </Stack>
  );
}

export default SidebarMenu;
