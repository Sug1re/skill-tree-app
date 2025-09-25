import React from "react";
import { Box, Card } from "@mui/material";
import LoginForm from "../Forms/LoginForm";
import BaseButton from "../Base/BaseButton";
import { useRouter } from "next/navigation";

const LoginCards = () => {
  const router = useRouter();

  return (
    <>
      <Card sx={{ px: 3, py: 5, borderRadius: 2, boxShadow: 3 }}>
        <Box display="flex" flexDirection="column" gap={4}>
          <LoginForm
            onSignupSuccess={() => {
              router.push("/mypage");
            }}
          />
          <BaseButton
            color="green"
            type="button"
            width="100%"
            onClick={() => router.push("/signup")}
          >
            新規登録
          </BaseButton>
        </Box>
      </Card>
    </>
  );
};

export default LoginCards;
