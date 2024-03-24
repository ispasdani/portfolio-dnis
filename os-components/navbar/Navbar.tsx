"use client";

import React, { useContext } from "react";
import styles from "@/os-components/navbar/styles.module.scss";
import TerminalIcon from "@/os-svgs/terminalIcon/TerminalIcon";
import { terminalIcons } from "@/utils/TerminalIcons";
import { OsFoldersContext } from "@/contexts/OsContext";
import StartMenu from "../startMenu/StartMenu";

const Navbar = () => {
  let { setSelectedFolder, selectedFolder } = useContext(OsFoldersContext);

  return (
    <div className={styles.navbar}>
      {terminalIcons.map((item, index) => (
        <div
          className={styles.terminalItem}
          onClick={() => {
            if (selectedFolder === item.id) {
              setSelectedFolder("");
            } else {
              setSelectedFolder(item.id);
            }
          }}
          key={(index + 1) * 98438698346}
        >
          {selectedFolder === "settings" && item.id === "settings" && (
            <StartMenu />
          )}
          <TerminalIcon title={item.title} imgSrc={item.icon} id={item.id} />
        </div>
      ))}
    </div>
  );
};

export default Navbar;
