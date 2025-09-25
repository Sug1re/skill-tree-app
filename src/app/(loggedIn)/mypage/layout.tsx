"use client";

import { SideBarProvider } from "@/context/SideBarContext";
import SideBar from "@/components/Layout/SideBar";

export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SideBarProvider>
      <SideBar />
      {children}
    </SideBarProvider>
  );
}
