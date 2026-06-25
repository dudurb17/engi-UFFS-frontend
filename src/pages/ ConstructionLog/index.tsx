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
import constructionLogImage from "../../assets/fundacao.jpeg";
import constructionLogImage2 from "../../assets/images.jpeg";

const { Title, Text } = Typography;

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
      <div
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
          <CloudOutlined />
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
              <Text strong>residencia alpha</Text>
              <Text type="secondary">Fundaçção - Estacas</Text>
            </Flex>

            <Flex gap={10}>
              <Text>Nublado</Text>
              <EditOutlined />
              <DeleteOutlined />
            </Flex>
          </Flex>
          <Flex gap={4}>
            <CalendarOutlined /> <Text>24/06/2026</Text>
            <ClockCircleOutlined /> <Text>10:00</Text>
            <UserOutlined /> <Text>João da Silva</Text>
          </Flex>
          <Text>
            Acompanhamento da perfuração das estacas hélice contínua. Terreno
            apresenta boa resistência conforme indicava a sondagem. Foram
            concretadas 12 estacas no período da tarde sem intercorrências.
          </Text>
          <br />
          <Flex gap={10}>
            <Image
              width={100}
              style={{ marginTop: 10, borderRadius: 8 }}
              src={constructionLogImage}
            />
          </Flex>
        </Card>
      </div>
      <div
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
          <SunOutlined />
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
              <Text type="secondary">Fundaçção - Estacas</Text>
            </Flex>

            <Flex gap={10}>
              <Text>Ensolarado</Text>
              <EditOutlined />
              <DeleteOutlined />
            </Flex>
          </Flex>
          <Flex gap={4}>
            <CalendarOutlined /> <Text>23/06/2026</Text>
            <ClockCircleOutlined /> <Text>08:30</Text>
            <UserOutlined /> <Text>Maria Santos</Text>
          </Flex>
          <Text>
            Início da escavação das estacas no bloco B. Condições climáticas
            favoráveis permitiram ritmo acelerado de trabalho. Concretagem de 8
            estacas concluída até o meio-dia, com controle de slump dentro do
            especificado.
          </Text>
          <br />
          <Flex gap={10}>
            <Image
              width={100}
              style={{ marginTop: 10, borderRadius: 8 }}
              src={constructionLogImage2}
            />
          </Flex>
        </Card>
      </div>
    </div>
  );
}
