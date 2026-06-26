import { Layout as AntLayout } from "antd";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import { content, innerLayout, rootLayout } from "./styles";

const { Content } = AntLayout;

export function Layout() {
  return (
    <AntLayout style={rootLayout}>
      <Sidebar />
      <AntLayout style={innerLayout}>
        <Content style={content}>
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
}
