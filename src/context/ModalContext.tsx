"use client";

import React, { createContext, useContext, useState } from "react";

type ModalContextType = {
  modalId: string | null;
  setModalId: (id: string | null) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalId, setModalId] = useState<string | null>(null);

  return (
    <ModalContext.Provider value={{ modalId, setModalId }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};
