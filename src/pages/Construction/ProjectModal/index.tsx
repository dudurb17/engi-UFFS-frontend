import { DatePicker, Flex, Form, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { formField, formRow } from "../styles";
import FormModal from "../../../components/FormModal";

export type ProjectFormStatus =
  | "Em execução"
  | "Planejamento"
  | "Finalizado"
  | "Suspenso";

const projectStatusOptions: {
  label: ProjectFormStatus;
  value: ProjectFormStatus;
}[] = [
  { label: "Em execução", value: "Em execução" },
  { label: "Planejamento", value: "Planejamento" },
  { label: "Finalizado", value: "Finalizado" },
  { label: "Suspenso", value: "Suspenso" },
];

export type ProjectFormValues = {
  nome: string;
  cliente: string;
  endereco: string;
  dataInicio: unknown;
  prazo: string;
  orcamento: string;
  status: ProjectFormStatus;
};

type ProjectModalProps = {
  open: boolean;
  onClose: () => void;
  onSave?: (values: ProjectFormValues) => void;
};

export default function ProjectModal({
  open,
  onClose,
  onSave,
}: ProjectModalProps) {
  const [form] = Form.useForm<ProjectFormValues>();

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
    <FormModal
      title="Novo Projeto"
      iconButton={<PlusOutlined />}
      open={open}
      onClose={handleClose}
      onSave={handleSave}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Nome da Obra"
          name="nome"
          rules={[{ required: true, message: "Informe o nome da obra" }]}
        >
          <Input placeholder="Ex.: Residência Alpha" />
        </Form.Item>

        <Form.Item
          label="Cliente / Contratante"
          name="cliente"
          rules={[{ required: true, message: "Informe o cliente" }]}
        >
          <Input placeholder="Ex.: Cláudio Silva" />
        </Form.Item>

        <Form.Item
          label="Endereço da Obra"
          name="endereco"
          rules={[{ required: true, message: "Informe o endereço" }]}
        >
          <Input placeholder="Ex.: Rua das Flores, 123 - Chapecó/SC" />
        </Form.Item>

        <Flex gap={12} style={formRow}>
          <Form.Item
            label="Data Início"
            name="dataInicio"
            rules={[{ required: true, message: "Informe a data de início" }]}
            style={formField}
          >
            <DatePicker
              style={{ width: "100%" }}
              format="DD/MM/YYYY"
              placeholder="Selecione a data"
            />
          </Form.Item>

          <Form.Item
            label="Prazo"
            name="prazo"
            rules={[{ required: true, message: "Informe o prazo" }]}
            style={formField}
          >
            <Input placeholder="Ex.: 180 dias" />
          </Form.Item>
        </Flex>

        <Flex gap={12} style={formRow}>
          <Form.Item
            label="Orçamento (R$)"
            name="orcamento"
            rules={[{ required: true, message: "Informe o orçamento" }]}
            style={formField}
          >
            <Input placeholder="0,00" />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Selecione o status" }]}
            style={formField}
          >
            <Select
              placeholder="Selecione o status"
              options={projectStatusOptions}
            />
          </Form.Item>
        </Flex>
      </Form>
    </FormModal>
  );
}
