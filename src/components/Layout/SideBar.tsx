"use client";

import React from "react";
import { Drawer, List, Box } from "@mui/material";
import { useSideBar } from "@/context/SideBarContext";
import { SIDE_BAR_TOP, SIDE_BAR_BOTTOM } from "@/constants/sideBarItems";
import SideBarButton from "../Buttons/SideBarButtons";

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
      {/* 上側のリスト */}
      <List>
        <SideBarButton
          {...SIDE_BAR_TOP[0]}
          selected={selected}
          setSelected={setSelected}
        />
        <SideBarButton
          {...SIDE_BAR_TOP[1]}
          selected={selected}
          setSelected={setSelected}
        />
        <SideBarButton
          {...SIDE_BAR_TOP[2]}
          selected={selected}
          setSelected={setSelected}
        />
        <SideBarButton
          {...SIDE_BAR_TOP[3]}
          selected={selected}
          setSelected={setSelected}
        />
      </List>

      {/* 下側のアイコンを押し出す */}
      <Box flexGrow={1} />

      {/* 下側のリスト */}
      <List>
        <SideBarButton
          {...SIDE_BAR_BOTTOM[0]}
          selected={selected}
          setSelected={setSelected}
        />
        <SideBarButton
          {...SIDE_BAR_BOTTOM[1]}
          selected={selected}
          setSelected={setSelected}
        />
      </List>
    </Drawer>
  );
}
