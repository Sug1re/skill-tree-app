import React from "react";
import { Box, Modal as MuiModal, Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  container?: HTMLElement | null;
};

const BaseModal = ({ children, title, isOpen, onClose, container }: Props) => {
  return (
    <>
      <MuiModal
        open={isOpen}
        onClose={onClose}
        container={container ?? undefined}
        BackdropProps={{
          sx: { backgroundColor: "transparent" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            px: 2,
            py: 3,
            borderRadius: 2,
            width: 300,
          }}
        >
          <Typography sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            {title}
          </Typography>
          {children}
        </Box>
      </MuiModal>
    </>
  );
};

export default BaseModal;
