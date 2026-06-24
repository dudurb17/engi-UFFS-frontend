import { FiBriefcase, FiCamera, FiDollarSign, FiHome, FiLogOut, FiSettings } from "react-icons/fi";
import engineerLogo from "../../assets/logo.jpg";
import { SidebarLink } from "./components/SidebarLink";
import {
  BrandSubtitle,
  BrandTitle,
  Container,
  Header,
  Logo,
  NavTitle,
} from "./styles";

export function Sidebar() {
  return (
    <Container>
      <div>
        <Header>
          <Logo src={engineerLogo} alt="Engineer Logo" />
          <BrandTitle>Engi UFFS</BrandTitle>
          <BrandSubtitle>CREA-SC 1233</BrandSubtitle>
        </Header>
        <NavTitle>Navegação</NavTitle>
        <SidebarLink to="/">
          <FiHome size={20} /> Painel de Controle
        </SidebarLink>
        <SidebarLink to="/sobre">
          <FiBriefcase size={20} /> Obras e Projetos
        </SidebarLink>
        <SidebarLink to="/obra">
          <FiCamera size={20} /> Diário de Obra
        </SidebarLink>
        <SidebarLink to="/obra">
          <FiDollarSign size={20} /> Financeiro
        </SidebarLink>
      </div>
      <div>
        <SidebarLink to="/obra">
          <FiSettings size={20} /> Configurações
        </SidebarLink>
        <SidebarLink to="/obra">
          <FiLogOut size={20} /> Sair
        </SidebarLink>
      </div>
    </Container>
  );
}
