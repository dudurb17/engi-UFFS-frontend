import {
  Button,
  Card,
  Flex,
  Input,
  Space,
  Table,
  Tag,
  Typography,
  type TableColumnsType,
} from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  DollarOutlined,
  EditOutlined,
  EyeOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { useMemo, useState } from "react";
import {
  pagamentos,
  type Pagamento,
  type PagamentoStatus,
} from "../../mocks/pagamentos";

const { Title, Text } = Typography;

const statusTagColor: Record<PagamentoStatus, string> = {
  Pago: "success",
  Pendente: "warning",
  Atrasado: "error",
};

const columns: TableColumnsType<Pagamento> = [
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
    title: "PARCELA",
    dataIndex: "parcela",
    key: "parcela",
  },
  {
    title: "VENCIMENTO",
    dataIndex: "vencimento",
    key: "vencimento",
  },
  {
    title: "VALOR",
    dataIndex: "valor",
    key: "valor",
  },
  {
    title: "STATUS",
    key: "status",
    render: (_, pagamento) => (
      <Tag color={statusTagColor[pagamento.status]}>{pagamento.status}</Tag>
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

export function Finance() {
  const [busca, setBusca] = useState("");

  const pagamentosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    if (!termo) return pagamentos;

    return pagamentos.filter(
      (pagamento) =>
        pagamento.nome.toLowerCase().includes(termo) ||
        pagamento.cliente.toLowerCase().includes(termo),
    );
  }, [busca]);

  return (
    <div>
      <Flex justify="space-between" align="center" gap={20}>
        <div>
          <Title level={1} style={{ margin: 0 }}>
            Controle Financeiro
          </Title>
          <Text type="secondary">
            Requisito Funcional: RF17 - Controle de Pagamentos
          </Text>
        </div>
        <Button type="primary" danger icon={<DollarOutlined />} size="large">
          Registrar Pagamento
        </Button>
      </Flex>
      <Flex style={{ marginTop: 20 }} gap={10}>
        <Card style={{ width: "33%" }}>
          <Flex gap={20}>
            <CheckCircleOutlined style={{ color: "#52c41a", fontSize: 25 }} />
            <Flex vertical>
              <Text strong style={{ fontSize: 12 }}>
                Pagamento recebido
              </Text>
              <Text strong style={{ fontSize: 18 }}>
                R$ 10.000,00
              </Text>
            </Flex>
          </Flex>
        </Card>
        <Card style={{ width: "33%" }}>
          <Flex gap={20}>
            <ClockCircleOutlined style={{ color: "#fa8c16", fontSize: 25 }} />
            <Flex vertical>
              <Text strong style={{ fontSize: 12 }}>
                Pagamento pendente
              </Text>
              <Text strong style={{ fontSize: 18 }}>
                R$ 5.000,00
              </Text>
            </Flex>
          </Flex>
        </Card>
        <Card style={{ width: "33%" }}>
          <Flex gap={20}>
            <WarningOutlined style={{ color: "#f5222d", fontSize: 25 }} />
            <Flex vertical>
              <Text strong style={{ fontSize: 12 }}>
                Pagamento atrasado
              </Text>
              <Text strong style={{ fontSize: 18 }}>
                R$ 2.000,00
              </Text>
            </Flex>
          </Flex>
        </Card>
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
          dataSource={pagamentosFiltrados}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          locale={{ emptyText: "Nenhum projeto encontrado." }}
        />
      </Card>
    </div>
  );
}
