"use client";

import React from "react";
import {
  Drawer,
  List,
  ListItem,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import { useSideBar } from "@/context/SideBarContext";
import { SIDE_BAR_TOP, SIDE_BAR_BOTTOM } from "@/constants/sideBarItems";

export default function SideBar() {
  const { selected, setSelected } = useSideBar();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 80,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          backgroundColor: "#3a3a3aff",
          width: 80,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <List>
        {SIDE_BAR_TOP.map((item) => (
          <Tooltip key={item.id} title={item.label} placement="right">
            <ListItem disablePadding sx={{ justifyContent: "center", mb: 2 }}>
              <IconButton
                disableRipple
                sx={{
                  color: selected === item.id ? "#FFFFFF" : "#B0B0B0", // 選択中は白、未選択は灰
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  width: 56,
                  height: 56,
                }}
                onClick={() => setSelected(item.id)}
              >
                <item.icon sx={{ fontSize: item.fontSize }} />
              </IconButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>

      {/* 下側のアイコンを押し出す */}
      <Box flexGrow={1} />

      <List>
        {SIDE_BAR_BOTTOM.map((item) => (
          <Tooltip key={item.id} title={item.label} placement="right">
            <ListItem disablePadding sx={{ justifyContent: "center", mb: 2 }}>
              <IconButton
                disableRipple
                sx={{
                  color: selected === item.id ? "#FFFFFF" : "#B0B0B0",
                  "&:hover": { backgroundColor: "transparent" },
                  width: 56,
                  height: 56,
                  padding: 0,
                }}
                onClick={() => setSelected(item.id)}
              >
                <item.icon sx={{ fontSize: item.fontSize }} />
              </IconButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
}
