import { Button, Card, Flex, Image, Typography } from "antd";
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

const { Title, Text } = Typography;

const climaIcon = {
  Nublado: CloudOutlined,
  Ensolarado: SunOutlined,
} as const;

export function ConstructionLog() {
  return (
    <div>
      <Flex justify="space-between" align="center" gap={20}>
        <div>
          <Title level={1} style={{ margin: 0 }}>
            Diário de Obra
          </Title>
          <Text type="secondary">
            Requisito Funcional: RF07 - Registro Fotográfico
          </Text>
        </div>
        <Button type="primary" danger icon={<CameraOutlined />} size="large">
          Novo Registro Diário
        </Button>
      </Flex>

      {registrosDiario.map((registro) => {
        const ClimaIcon = climaIcon[registro.clima];

        return (
          <div
            key={registro.id}
            style={{
              flexDirection: "row",
              gap: 20,
              display: "flex",
              marginTop: 20,
            }}
          >
            <Card
              style={{
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "100%",
              }}
            >
              <ClimaIcon />
            </Card>
            <Card style={{ width: "100%" }}>
              <Flex gap={4} justify="space-between">
                <Flex
                  gap={6}
                  style={{
                    padding: "2px 8px",
                    background: "#fafafa",
                    borderRadius: 4,
                    borderLeft: "2px solid #fa8c16",
                  }}
                >
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
                  style={{ marginTop: 10, borderRadius: 8 }}
                  src={registro.imagem}
                />
              </Flex>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
