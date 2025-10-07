"use client";

import React from "react";
import { ListItem, IconButton, Tooltip } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import { useModal } from "@/context/ModalContext";

type SideBarButtonProps = {
  id: string;
  icon: SvgIconComponent;
  label: string;
  fontSize: number;
  selected: string;
  setSelected: (id: string) => void;
};

export default function SideBarButton({
  id,
  icon: Icon,
  label,
  fontSize,
  selected,
  setSelected,
}: SideBarButtonProps) {
  const { setModalId } = useModal();
  return (
    <Tooltip title={label} placement="right">
      <ListItem disablePadding sx={{ justifyContent: "center", mb: 2 }}>
        <IconButton
          disableRipple
          sx={{
            color: selected === id ? "#FFFFFF" : "#B0B0B0",
            "&:hover": { backgroundColor: "transparent" },
            width: 56,
            height: 56,
          }}
          onClick={() => {
            setSelected(id);
            setModalId(id);
          }}
        >
          <Icon sx={{ fontSize }} />
        </IconButton>
      </ListItem>
    </Tooltip>
  );
}
