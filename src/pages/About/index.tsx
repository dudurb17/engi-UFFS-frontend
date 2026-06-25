import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Flex,
  Input,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import type { TableColumnsType } from "antd";
import { useMemo, useState } from "react";

const { Title, Text } = Typography;

type Status = "Em andamento" | "Concluído" | "Pendente" | "Atrasado";

type Projeto = {
  id: number;
  nome: string;
  cliente: string;
  localizacao: string;
  cronograma: string;
  status: Status;
};

const projetos: Projeto[] = [
  {
    id: 1,
    nome: "Obra Cláudio",
    cliente: "Cláudio Silva",
    localizacao: "Chapecó - SC",
    cronograma: "Jan/2026 - Jun/2026",
    status: "Em andamento",
  },
  {
    id: 2,
    nome: "Obra Beltrao",
    cliente: "Beltrão Construções",
    localizacao: "Xanxerê - SC",
    cronograma: "Fev/2026 - Ago/2026",
    status: "Em andamento",
  },
  {
    id: 3,
    nome: "Obra Cleyton",
    cliente: "Cleyton Martins",
    localizacao: "Concórdia - SC",
    cronograma: "Mar/2026 - Set/2026",
    status: "Pendente",
  },
  {
    id: 4,
    nome: "Obra Eder",
    cliente: "Eder Oliveira",
    localizacao: "São Miguel do Oeste - SC",
    cronograma: "Abr/2026 - Out/2026",
    status: "Pendente",
  },
  {
    id: 5,
    nome: "Obra Maurício",
    cliente: "Maurício Alves",
    localizacao: "Palmitos - SC",
    cronograma: "Mai/2026 - Nov/2026",
    status: "Em andamento",
  },
];

const statusTagColor: Record<Status, string> = {
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

export function About() {
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
      <Flex justify="space-between" align="center" gap={20}>
        <div>
          <Title level={1} style={{ margin: 0 }}>
            Gestão de Projetos e Obras
          </Title>
          <Text type="secondary">
            Requisitos funcionais: RF05 - Crud Projetos
          </Text>
        </div>
        <Button type="primary" danger icon={<PlusOutlined />} size="large">
          Novo Projeto
        </Button>
      </Flex>

      <Card style={{ marginTop: 20 }}>
        <Input
          placeholder="Nome do Projeto"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          style={{ maxWidth: 320, marginBottom: 20 }}
          allowClear
        />
        <Table
          columns={columns}
          dataSource={projetosFiltrados}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          locale={{ emptyText: "Nenhum projeto encontrado." }}
        />
      </Card>
    </div>
  );
}
