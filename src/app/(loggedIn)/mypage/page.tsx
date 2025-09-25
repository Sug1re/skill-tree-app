import React from "react";
import { Box, Typography } from "@mui/material";
import SideBar from "@/components/Layout/SideBar";

const MyPage = () => {
  return (
    <>
      <Box display="flex">
        <SideBar />

        <Box flexGrow={1}>
          <Typography variant="h4">MyPage</Typography>
          <Typography>ここにページのメインコンテンツを配置します。</Typography>
        </Box>
      </Box>
    </>
  );
};

export default MyPage;
