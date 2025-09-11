"use client";

import React from "react";
import { Box } from "@mui/material";
import SignupForm from "@/components/Forms/SignupForm";
import BaseButton from "@/components/Base/BaseButton";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  return (
    <>
      <Box display="flex" flexDirection="column" gap={4}>
        <SignupForm
          onSignupSuccess={() => {
            router.push("/login");
          }}
        />
        <BaseButton
          color="green"
          type="button"
          width="90%"
          onClick={() => router.push("/login")}
        >
          ログイン
        </BaseButton>
      </Box>
    </>
  );
}
