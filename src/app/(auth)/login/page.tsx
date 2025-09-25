"use client";

import React from "react";
import { Box, Grid } from "@mui/material";
import LoginCards from "@/components/Cards/LoginCards";

export default function LoginPage() {
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", p: 2 }}
      >
        <Grid size={6}>
          <Box
            component="img"
            src="/images/skill-tree-app-icon.png"
            alt="App Icon"
            sx={{
              width: "75%",
              maxWidth: 500,
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
              display: "block",
              mx: "auto",
              bgcolor: "white",
            }}
          />
        </Grid>

        <Grid size={6}>
          <LoginCards />
        </Grid>
      </Grid>
    </>
  );
}
