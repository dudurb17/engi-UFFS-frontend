import {
  CameraOutlined,
  DollarOutlined,
  HomeOutlined,
  LogoutOutlined,
  ProjectOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Flex, Layout, Menu, Typography } from "antd";
import type { MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import engineerLogo from "../../assets/logo.jpg";

const { Sider } = Layout;
const { Title, Text } = Typography;

const navItems: MenuProps["items"] = [
  { key: "/", icon: <HomeOutlined />, label: "Painel de Controle" },
  { key: "/sobre", icon: <ProjectOutlined />, label: "Obras e Projetos" },
  { key: "/obra", icon: <CameraOutlined />, label: "Diário de Obra" },
  { key: "/financeiro", icon: <DollarOutlined />, label: "Financeiro" },
];

const bottomItems: MenuProps["items"] = [
  { key: "/configuracoes", icon: <SettingOutlined />, label: "Configurações" },
  { key: "/logout", icon: <LogoutOutlined />, label: "Sair", danger: true },
];

const routeMap: Record<string, string> = {
  "/financeiro": "/obra",
  "/configuracoes": "/obra",
  "/logout": "/obra",
};

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    navigate(routeMap[key] ?? key);
  };

  return (
    <Sider width={200} theme="dark">
      <Flex
        vertical
        align="center"
        style={{ padding: "40px 16px 20px", textAlign: "center" }}
      >
        <Avatar src={engineerLogo} size={50} alt="Engineer Logo" />
        <Title level={5} style={{ color: "#fff", margin: "8px 0 0" }}>
          Engi UFFS
        </Title>
        <Text style={{ color: "rgba(255,255,255,0.65)", fontSize: 10 }}>
          CREA-SC 1233
        </Text>
      </Flex>

      <Text
        style={{
          display: "block",
          color: "rgba(255,255,255,0.65)",
          fontSize: 12,
          margin: "0 0 8px 24px",
        }}
      >
        Navegação
      </Text>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={navItems}
        onClick={handleMenuClick}
      />

      <Menu
        theme="dark"
        mode="inline"
        selectable={false}
        items={bottomItems}
        onClick={handleMenuClick}
        style={{ position: "absolute", bottom: 0, width: "100%" }}
      />
    </Sider>
  );
}
