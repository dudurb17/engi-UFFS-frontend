import { Button, DatePicker, Flex, Form, Input, Modal, Select } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import type { PagamentoStatus } from "../../../mocks/pagamentos";
import { projetos } from "../../../mocks/projetos";
import { formField, formRow } from "../styles";

const { TextArea } = Input;

const paymentStatusOptions: {
  label: PagamentoStatus;
  value: PagamentoStatus;
}[] = [
  { label: "Pendente", value: "Pendente" },
  { label: "Pago", value: "Pago" },
  { label: "Atrasado", value: "Atrasado" },
];

export type PaymentFormValues = {
  projeto: string;
  parcela: string;
  valor: string;
  vencimento: unknown;
  status: PagamentoStatus;
  observacoes?: string;
};

type PaymentModalProps = {
  open: boolean;
  onClose: () => void;
  onSave?: (values: PaymentFormValues) => void;
};

export default function PaymentModal({
  open,
  onClose,
  onSave,
}: PaymentModalProps) {
  const [form] = Form.useForm<PaymentFormValues>();

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave?.(values);
      handleClose();
    });
  };

  return (
    <Modal
      title="Registrar Pagamento"
      open={open}
      onCancel={handleClose}
      footer={
        <Flex justify="end" gap={12}>
          <Button type="default" size="large" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            type="primary"
            danger
            icon={<DollarOutlined />}
            size="large"
            onClick={handleSave}
          >
            Salvar
          </Button>
        </Flex>
      }
      width={640}
      destroyOnHidden
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Projeto"
          name="projeto"
          rules={[{ required: true, message: "Selecione o projeto" }]}
        >
          <Select
            placeholder="Selecione o projeto"
            options={projetos.map((projeto) => ({
              label: projeto.nome,
              value: projeto.nome,
            }))}
          />
        </Form.Item>

        <Form.Item
          label="Cliente"
          name="cliente"
          rules={[{ required: true, message: "Informe o cliente" }]}
        >
          <Input placeholder="Ex.: Cláudio Silva" />
        </Form.Item>

        <Flex gap={12} style={formRow}>
          <Form.Item
            label="Parcela"
            name="parcela"
            rules={[{ required: true, message: "Informe a parcela" }]}
            style={formField}
          >
            <Input placeholder="Ex.: 1/6" />
          </Form.Item>

          <Form.Item
            label="Valor (R$)"
            name="valor"
            rules={[{ required: true, message: "Informe o valor" }]}
            style={formField}
          >
            <Input placeholder="0,00" />
          </Form.Item>
        </Flex>

        <Flex gap={12} style={formRow}>
          <Form.Item
            label="Vencimento"
            name="vencimento"
            rules={[{ required: true, message: "Informe o vencimento" }]}
            style={formField}
          >
            <DatePicker
              style={{ width: "100%" }}
              format="DD/MM/YYYY"
              placeholder="Selecione a data"
            />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Selecione o status" }]}
            style={formField}
          >
            <Select
              placeholder="Selecione o status"
              options={paymentStatusOptions}
            />
          </Form.Item>
        </Flex>

        <Form.Item label="Observações" name="observacoes">
          <TextArea
            rows={4}
            placeholder="Informações adicionais sobre o pagamento"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
