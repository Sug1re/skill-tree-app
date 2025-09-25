"use client";

import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import BaseButton from "@/components/Base/BaseButton";
import { useToastContext } from "@/context/ToastContext";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import type { FirebaseError } from "firebase/app";

type SignupFormProps = {
  onSignupSuccess: () => void;
};

const AddProjectForm = ({ onSignupSuccess }: SignupFormProps) => {
  const { showToast } = useToastContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // ===== メールバリデーション =====
  const validateEmail = (value: string) => {
    if (!value) {
      return "メールアドレスを入力してください";
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      return "有効なメールアドレスを入力してください";
    }
    if (value.length > 254) {
      return "メールアドレスは254文字以内で入力してください";
    }
    return "";
  };

  // ===== パスワードバリデーション =====
  const validatePassword = (value: string) => {
    if (!value) {
      return "パスワードを入力してください";
    }
    if (value.length < 8) {
      return "パスワードは8文字以上で入力してください";
    }
    if (value.length > 64) {
      return "パスワードは64文字以内で入力してください";
    }
    return "";
  };

  // ===== 入力時のハンドラ =====
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  // ===== 送信 =====
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      showToast("ログインに成功しました！", "success");
      onSignupSuccess();
    } catch (err) {
      const firebaseError = err as FirebaseError;

      // エラーコードごとに分岐
      switch (firebaseError.code) {
        case "auth/user-not-found":
          showToast("メールアドレスが登録されていません。", "error");
          break;
        case "auth/invalid-email":
          showToast("メールアドレスが無効です。", "error");
          break;
        case "auth/wrong-password":
          showToast("パスワードが間違っています。", "error");
          break;
        default:
          showToast(
            "ログインに失敗しました。もう一度お試しください。",
            "error"
          );
          break;
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            width: "90%",
            gap: 2,
            mb: 2,
          }}
        >
          <TextField
            id="email"
            label="メールアドレス"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError || ""}
          />
          <TextField
            id="password"
            label="パスワード"
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            error={!!passwordError}
            helperText={passwordError || " "}
          />
          <BaseButton color="dark" type="submit" width="100%">
            ログイン
          </BaseButton>
        </Box>
      </form>
    </>
  );
};

export default AddProjectForm;
