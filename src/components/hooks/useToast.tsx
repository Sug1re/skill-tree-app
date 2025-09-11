"use client";

import React, { useState, useCallback } from "react";
import { Snackbar, Alert, Slide } from "@mui/material";
import type { SlideProps } from "@mui/material";

type ToastSeverity = "success" | "error";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

export const useToast = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<ToastSeverity>("success");

  const showToast = useCallback(
    (msg: string, sev: ToastSeverity = "success") => {
      setMessage(msg);
      setSeverity(sev);
      setOpen(true);
    },
    []
  );

  const Toast = (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionComponent={SlideTransition}
      sx={{
        "& .MuiSnackbarContent-root": {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        },
      }}
    >
      <Alert
        severity={severity}
        onClose={() => setOpen(false)}
        sx={{
          width: "100%",
          fontWeight: "bold",
          border: "1px solid #999",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );

  return { showToast, Toast };
};
