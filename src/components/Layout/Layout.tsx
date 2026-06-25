import { Layout as AntLayout } from "antd";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";

const { Content } = AntLayout;

export function Layout() {
  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <AntLayout>
        <Content
          style={{
            padding: "40px 120px",
            background: "#f4f4f5",
            color: "#18181b",
          }}
        >
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
}
