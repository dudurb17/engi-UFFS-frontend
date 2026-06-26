import type { CSSProperties } from "react";

export const SIDEBAR_WIDTH = 200;

export const sider: CSSProperties = {
  position: "fixed",
  left: 0,
  top: 0,
  height: "100vh",
  zIndex: 100,
};

export const brandSection: CSSProperties = {
  padding: "40px 16px 20px",
  textAlign: "center",
};

export const brandTitle: CSSProperties = {
  color: "#fff",
  margin: "8px 0 0",
};

export const brandSubtitle: CSSProperties = {
  color: "rgba(255,255,255,0.65)",
  fontSize: 10,
};

export const navLabel: CSSProperties = {
  display: "block",
  color: "rgba(255,255,255,0.65)",
  fontSize: 12,
  margin: "0 0 8px 24px",
};

export const bottomMenu: CSSProperties = {
  position: "absolute",
  bottom: 0,
  width: "100%",
};
