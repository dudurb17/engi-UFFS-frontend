import type { CSSProperties } from "react";
import { SIDEBAR_WIDTH } from "../Sidebar/styles";

export const rootLayout: CSSProperties = {
  minHeight: "100vh",
};

export const innerLayout: CSSProperties = {
  marginLeft: SIDEBAR_WIDTH,
};

export const content: CSSProperties = {
  background: "#f4f4f5",
  color: "#18181b",
  padding: "40px 120px",
  minHeight: "100vh",
};
