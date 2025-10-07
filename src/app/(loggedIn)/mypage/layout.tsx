"use client";

import { SideBarProvider } from "@/context/SideBarContext";
import SideBar from "@/components/Layout/SideBar";
import { ModalProvider } from "@/context/ModalContext";

export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SideBarProvider>
      <ModalProvider>
        <SideBar />
        {children}
      </ModalProvider>
    </SideBarProvider>
  );
}
