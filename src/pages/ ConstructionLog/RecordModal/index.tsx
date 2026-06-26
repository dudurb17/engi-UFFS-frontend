import {
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  Modal,
  Select,
  TimePicker,
  Upload,
} from "antd";
import type { UploadFile } from "antd";
import { CameraOutlined, PlusOutlined } from "@ant-design/icons";
import { projetos } from "../../../mocks/projetos";
import { formDateField, formDateTimeRow, formTimeField } from "../styles";

const { TextArea } = Input;

const weatherConditions = [
  { label: "Ensolarado", value: "Ensolarado" },
  { label: "Nublado", value: "Nublado" },
  { label: "Chuvoso", value: "Chuvoso" },
  { label: "Parcialmente nublado", value: "Parcialmente nublado" },
];

export type RecordFormValues = {
  projeto: string;
  etapa: string;
  data: unknown;
  hora: unknown;
  condicaoClimatica: string;
  responsavel: string;
  descricao: string;
  foto?: UploadFile[];
};

type RecordModalProps = {
  open: boolean;
  onClose: () => void;
  onSave?: (values: RecordFormValues) => void;
};

function normFile(event: { fileList: UploadFile[] }) {
  return event.fileList;
}

export default function RecordModal({
  open,
  onClose,
  onSave,
}: RecordModalProps) {
  const [form] = Form.useForm<RecordFormValues>();

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
      title="Novo Registro Diário"
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
            icon={<CameraOutlined />}
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
          label="Etapa / Fase da Obra"
          name="etapa"
          rules={[{ required: true, message: "Informe a etapa ou fase" }]}
        >
          <Input placeholder="Ex.: Fundação - Estacas" />
        </Form.Item>

        <Flex gap={12} style={formDateTimeRow}>
          <Form.Item
            label="Data"
            name="data"
            rules={[{ required: true, message: "Informe a data" }]}
            style={formDateField}
          >
            <DatePicker
              style={{ width: "100%" }}
              format="DD/MM/YYYY"
              placeholder="Selecione a data"
            />
          </Form.Item>

          <Form.Item
            label="Hora"
            name="hora"
            rules={[{ required: true, message: "Informe a hora" }]}
            style={formTimeField}
          >
            <TimePicker
              style={{ width: "100%" }}
              format="HH:mm"
              placeholder="Selecione a hora"
            />
          </Form.Item>
        </Flex>

        <Flex gap={12} style={formDateTimeRow}>
          <Form.Item
            label="Condição Climática"
            name="condicaoClimatica"
            rules={[
              { required: true, message: "Selecione a condição climática" },
            ]}
            style={formDateField}
          >
            <Select
              placeholder="Selecione a condição climática"
              options={weatherConditions}
            />
          </Form.Item>

          <Form.Item
            label="Responsável"
            name="responsavel"
            rules={[{ required: true, message: "Informe o responsável" }]}
            style={formTimeField}
          >
            <Input placeholder="Nome do responsável" />
          </Form.Item>
        </Flex>

        <Form.Item
          label="Descrição / Ocorrências"
          name="descricao"
          rules={[{ required: true, message: "Informe a descrição" }]}
        >
          <TextArea
            rows={4}
            placeholder="Descreva as atividades e ocorrências do dia"
          />
        </Form.Item>

        <Form.Item
          label="Foto da Obra"
          name="foto"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            listType="picture-card"
            maxCount={1}
            style={{ width: "100%" }}
            beforeUpload={() => false}
            accept="image/*"
          >
            <Flex vertical align="center" gap={4}>
              <PlusOutlined />
              <span>Enviar foto</span>
            </Flex>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}
