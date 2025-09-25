import React from "react";
import { Box, Card } from "@mui/material";
import SignupForm from "../Forms/SignupForm";
import BaseButton from "../Base/BaseButton";
import { useRouter } from "next/navigation";

const SignupCards = () => {
  const router = useRouter();

  return (
    <>
      <Card sx={{ px: 3, py: 5, borderRadius: 2, boxShadow: 3 }}>
        <Box display="flex" flexDirection="column" gap={4}>
          <SignupForm
            onSignupSuccess={() => {
              router.push("/login");
            }}
          />
          <BaseButton
            color="green"
            type="button"
            width="100%"
            onClick={() => router.push("/login")}
          >
            ログイン
          </BaseButton>
        </Box>
      </Card>
    </>
  );
};

export default SignupCards;
