import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Card, Input, Space, Table, Tag, Typography } from "antd";
import type { TableColumnsType } from "antd";
import { useMemo, useState } from "react";
import {
  projetos,
  type Projeto,
  type ProjetoStatus,
} from "../../mocks/projetos";
import Header from "../../components/Header";
import { contentCard, searchInput } from "./styles";

const { Text } = Typography;

const statusTagColor: Record<ProjetoStatus, string> = {
  "Em andamento": "processing",
  Concluído: "success",
  Pendente: "warning",
  Atrasado: "error",
};

const columns: TableColumnsType<Projeto> = [
  {
    title: "PROJETO/CLIENTE",
    key: "projeto",
    render: (_, projeto) => (
      <>
        <Text strong>{projeto.nome}</Text>
        <br />
        <Text type="secondary">{projeto.cliente}</Text>
      </>
    ),
  },
  {
    title: "LOCALIZAÇÃO",
    dataIndex: "localizacao",
    key: "localizacao",
  },
  {
    title: "CRONOGRAMA",
    dataIndex: "cronograma",
    key: "cronograma",
  },
  {
    title: "STATUS",
    key: "status",
    render: (_, projeto) => (
      <Tag color={statusTagColor[projeto.status]}>{projeto.status}</Tag>
    ),
  },
  {
    title: "AÇÕES",
    key: "acoes",
    render: () => (
      <Space size="small">
        <Button type="text" icon={<EyeOutlined />} title="Visualizar" />
        <Button type="text" icon={<EditOutlined />} title="Editar" />
        <Button type="text" danger icon={<DeleteOutlined />} title="Excluir" />
      </Space>
    ),
  },
];

export function Construction() {
  const [busca, setBusca] = useState("");

  const projetosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    if (!termo) return projetos;

    return projetos.filter(
      (projeto) =>
        projeto.nome.toLowerCase().includes(termo) ||
        projeto.cliente.toLowerCase().includes(termo),
    );
  }, [busca]);

  return (
    <div>
      <Header
        title="Gestão de Projetos e Obras"
        subtitle="Requisitos funcionais: RF05 - Crud Projetos"
        buttonText="Novo Projeto"
        buttonIcon={<PlusOutlined />}
      />

      <Card style={contentCard}>
        <Input
          placeholder="Nome do Projeto"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          style={searchInput}
          allowClear
        />
        <Table
          columns={columns}
          dataSource={projetosFiltrados}
          rowKey="id"
          locale={{ emptyText: "Nenhum projeto encontrado." }}
        />
      </Card>
    </div>
  );
}
