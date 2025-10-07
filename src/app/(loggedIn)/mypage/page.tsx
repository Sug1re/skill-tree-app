"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import SideBar from "@/components/Layout/SideBar";
import AddProjectModal from "@/components/Modals/AddProjectModal";
import { useModal } from "@/context/ModalContext";

const MyPage = () => {
  const { modalId, setModalId } = useModal();
  return (
    <>
      <Box display="flex">
        <SideBar />

        <Box flexGrow={1}>
          <Typography variant="h4">MyPage</Typography>
          <Typography>ここにページのメインコンテンツを配置します。</Typography>

          {/* modalIdに応じてモーダルを切り替える */}
          {modalId === "add" && (
            <AddProjectModal opened={true} onClose={() => setModalId(null)} />
          )}

          {/* 例: profileAdd用のモーダルを追加するならここに */}
          {/* {modalId === "profileAdd" && <ProfileAddModal ... />} */}
        </Box>
      </Box>
    </>
  );
};

export default MyPage;
