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
import Header from "../../components/Header";
import {
  contentCard,
  overdueIcon,
  paidIcon,
  pendingIcon,
  searchInput,
  summaryCard,
  summaryLabel,
  summaryRow,
  summaryValue,
} from "./styles";

const { Text } = Typography;

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
      <Header
        title="Controle Financeiro"
        subtitle="Requisito Funcional: RF17 - Controle de Pagamentos"
        buttonText="Registrar Pagamento"
        buttonIcon={<DollarOutlined />}
      />
      <Flex style={summaryRow} gap={10}>
        <Card style={summaryCard}>
          <Flex gap={20}>
            <CheckCircleOutlined style={paidIcon} />
            <Flex vertical>
              <Text strong style={summaryLabel}>
                Pagamento recebido
              </Text>
              <Text strong style={summaryValue}>
                R$ 10.000,00
              </Text>
            </Flex>
          </Flex>
        </Card>
        <Card style={summaryCard}>
          <Flex gap={20}>
            <ClockCircleOutlined style={pendingIcon} />
            <Flex vertical>
              <Text strong style={summaryLabel}>
                Pagamento pendente
              </Text>
              <Text strong style={summaryValue}>
                R$ 5.000,00
              </Text>
            </Flex>
          </Flex>
        </Card>
        <Card style={summaryCard}>
          <Flex gap={20}>
            <WarningOutlined style={overdueIcon} />
            <Flex vertical>
              <Text strong style={summaryLabel}>
                Pagamento atrasado
              </Text>
              <Text strong style={summaryValue}>
                R$ 2.000,00
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>

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
          dataSource={pagamentosFiltrados}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          locale={{ emptyText: "Nenhum projeto encontrado." }}
        />
      </Card>
    </div>
  );
}
