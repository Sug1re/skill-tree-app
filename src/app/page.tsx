"use client";

import React from "react";
import { Typography } from "@mui/material";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";

export default function Home() {
  const { loading } = useAuthRedirect("/mypage", "/signup");

  if (loading)
    return (
      <>
        <Typography>読み込み中…</Typography>
      </>
    );

  // リダイレクト後はほぼこの行に到達しない
  return null;
}
