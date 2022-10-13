import React from "react";
import styles from "./sidenav.module.css";
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { navData } from "../lib/navData";
import { useState } from "react";
import { Button } from "@mui/material";
import logo from "../lib/images/noBgWhite.png";
import logoCrop from "../lib/images/noBgWhiteCrop.png";

export default function Sidenav() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div
      className={open ? styles.sidenav : styles.sidenavClosed}
      style={{
        height: "97vh",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <img
          src={open ? logo : logoCrop}
          style={{
            justifyContent: "center",
            width: open ? "80px" : "30px",
            position: "inherit",
            clear: "both",
            marginLeft: "10px",
          }}
        ></img>
      </div>
      <button
        className={styles.menuBtn}
        onClick={toggleOpen}
        style={{
          clear: "both",
        }}
      >
        {open ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </button>
      <hr
        style={{
          color: "white",
          width: "80%",
        }}
      ></hr>
      {navData.map((item) => {
        return (
          <div>
            {item.id === 3 && (
              <hr
                style={{
                  color: "white",
                  width: "80%",
                }}
              ></hr>
            )}
            <NavLink key={item.id} className={styles.sideitem} to={item.link}>
              {item.icon}
              <span
                style={{ visibility: open ? "visible" : "hidden" }}
                className={styles.linkText}
              >
                {item.text}
              </span>
            </NavLink>
          </div>
        );
      })}
      <hr
        style={{
          color: "white",
          width: "80%",
        }}
      ></hr>
      <span>
        <h5
          style={{
            color: "white",
            bottom: "30px",
            paddingLeft: "20px",
            paddingTop: "400px",
            display: "block",
            visibility: open ? "visible" : "hidden",
          }}
        >
          Stream
        </h5>
      </span>
      <div
        style={{
          visibility: open ? "visible" : "hidden",
          flexDirection: "row",
          display: "flex",
          paddingLeft: "20px",
        }}
      >
        <Button
          style={{
            marginRight: "10px",
          }}
          variant="outlined"
        >
          Import
        </Button>
        <Button
          style={{
            marginRight: "10px",
          }}
          variant="outlined"
        >
          Export
        </Button>
      </div>
    </div>
  );
}
