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
import {
  SIDEBAR_WIDTH,
  bottomMenu,
  brandSection,
  brandSubtitle,
  brandTitle,
  navLabel,
  sider,
} from "./styles";

const { Sider } = Layout;
const { Title, Text } = Typography;

const navItems: MenuProps["items"] = [
  { key: "/", icon: <HomeOutlined />, label: "Painel de Controle" },
  { key: "/construcao", icon: <ProjectOutlined />, label: "Obras e Projetos" },
  { key: "/obra", icon: <CameraOutlined />, label: "Diário de Obra" },
  { key: "/financeiro", icon: <DollarOutlined />, label: "Financeiro" },
];

const bottomItems: MenuProps["items"] = [
  { key: "/configuracoes", icon: <SettingOutlined />, label: "Configurações" },
  { key: "/logout", icon: <LogoutOutlined />, label: "Sair", danger: true },
];

const routeMap: Record<string, string> = {
  "/financeiro": "/financeiro",
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
    <Sider width={SIDEBAR_WIDTH} style={sider}>
      <Flex vertical align="center" style={brandSection}>
        <Avatar src={engineerLogo} size={50} alt="Engineer Logo" />
        <Title level={5} style={brandTitle}>
          Engi UFFS
        </Title>
        <Text style={brandSubtitle}>CREA-SC 1233</Text>
      </Flex>

      <Text style={navLabel}>Navegação</Text>
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
        style={bottomMenu}
      />
    </Sider>
  );
}
