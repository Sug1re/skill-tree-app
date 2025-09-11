"use client";

import React from "react";
import { Box } from "@mui/material";
import LoginForm from "@/components/Forms/LoginForm";
import BaseButton from "@/components/Base/BaseButton";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <>
      <Box display="flex" flexDirection="column" gap={4}>
        <LoginForm
          onSignupSuccess={() => {
            router.push("/signup");
          }}
        />
        <BaseButton
          color="green"
          type="button"
          width="90%"
          onClick={() => router.push("/signup")}
        >
          新規登録
        </BaseButton>
      </Box>
    </>
  );
}
