import React from "react";
import { Button } from "@mui/material";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  color: "dark" | "light" | "green";
  type: "button" | "submit";
  width: string;
  leftIcon?: React.ReactNode;
};

const BaseButton = ({
  children,
  onClick,
  color = "light",
  type = "button",
  width = "auto",
  leftIcon,
}: Props): React.ReactElement => {
  const getColors = () => {
    switch (color) {
      case "dark":
        return {
          text: "#ffffff",
          bg: "#111827",
          hoverBg: "#111827",
          hoverText: "#ffffff",
        };
      case "green":
        return {
          text: "#ffffff",
          bg: "#10b981",
          hoverBg: "#059669",
          hoverText: "#ffffff",
        };
      case "light":
      default:
        return {
          text: "#111827",
          bg: "#ffffff",
          hoverBg: "#111827",
          hoverText: "#ffffff",
        };
    }
  };

  const { text, bg, hoverBg, hoverText } = getColors();

  return (
    <Button
      disableRipple
      disableElevation
      onClick={onClick}
      type={type}
      sx={{
        width,
        margin: "0 auto", // 中央寄せ
        display: "flex",
        color: text,
        bgcolor: bg,
        "&:hover": {
          backgroundColor: hoverBg,
          color: hoverText,
          transform: "scale(0.95)",
        },
        transition: "all 0.3s ease",
      }}
      startIcon={leftIcon}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
