import { Card, Flex, Image, Typography } from "antd";
import {
  CalendarOutlined,
  CameraOutlined,
  ClockCircleOutlined,
  CloudOutlined,
  DeleteOutlined,
  SunOutlined,
  EditOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { registrosDiario } from "../../mocks/registrosDiario";
import Header from "../../components/Header";
import RecordModal from "./RecordModal";
import {
  climaCard,
  obraTag,
  registroCard,
  registroImage,
  registroRow,
} from "./styles";
import { useState } from "react";

const { Text } = Typography;

const climaIcon = {
  Nublado: CloudOutlined,
  Ensolarado: SunOutlined,
} as const;

export function ConstructionLog() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Header
        title="Diário de Obra"
        subtitle="Requisito Funcional: RF07 - Registro Fotográfico"
        buttonText="Novo Registro Diário"
        buttonIcon={<CameraOutlined />}
        onClick={() => setShowModal(true)}
      />

      {registrosDiario.map((registro) => {
        const ClimaIcon = climaIcon[registro.clima];

        return (
          <div key={registro.id} style={registroRow}>
            <Card style={climaCard}>
              <ClimaIcon />
            </Card>
            <Card style={registroCard}>
              <Flex gap={4} justify="space-between">
                <Flex gap={6} style={obraTag}>
                  {registro.obra && <Text strong>{registro.obra}</Text>}
                  <Text type="secondary">{registro.etapa}</Text>
                </Flex>

                <Flex gap={10}>
                  <Text>{registro.clima}</Text>
                  <EditOutlined />
                  <DeleteOutlined />
                </Flex>
              </Flex>
              <Flex gap={4}>
                <CalendarOutlined /> <Text>{registro.data}</Text>
                <ClockCircleOutlined /> <Text>{registro.horario}</Text>
                <UserOutlined /> <Text>{registro.responsavel}</Text>
              </Flex>
              <Text>{registro.descricao}</Text>
              <br />
              <Flex gap={10}>
                <Image
                  width={100}
                  style={registroImage}
                  src={registro.imagem}
                />
              </Flex>
            </Card>
          </div>
        );
      })}

      <RecordModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
