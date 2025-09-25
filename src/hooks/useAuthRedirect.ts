"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebase";
import type { User } from "firebase/auth";

/**
 * Firebase認証状態に応じてリダイレクトするフック
 * @param loggedInPath ログイン済みユーザーが遷移するパス
 * @param loggedOutPath 未ログインユーザーが遷移するパス
 */
export const useAuthRedirect = (loggedInPath: string, loggedOutPath: string) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        router.replace(loggedInPath);
      } else {
        router.replace(loggedOutPath);
      }
    });

    return () => unsubscribe();
  }, [router, loggedInPath, loggedOutPath]);

  return { user, loading };
};
