"use client";

import React, { createContext, useState } from "react";

export const OsFoldersContext = createContext<{
  selectedFolder: string;
  setSelectedFolder: React.Dispatch<React.SetStateAction<string>>;
}>({
  selectedFolder: "",
  setSelectedFolder: () => {},
});

type OsFoldersContextProps = {
  children: React.ReactNode;
};

function OsFoldersContextSelector({ children }: OsFoldersContextProps) {
  const [selectedFolder, setSelectedFolder] = useState<string>("");

  return (
    <OsFoldersContext.Provider value={{ selectedFolder, setSelectedFolder }}>
      {children}
    </OsFoldersContext.Provider>
  );
}

export default OsFoldersContextSelector;
