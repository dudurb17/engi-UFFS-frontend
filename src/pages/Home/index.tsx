import { Badge, Card, Flex, Typography } from "antd";
import { agenda } from "../../mocks/agenda";

const { Title, Text } = Typography;

export function Home() {
  return (
    <Card>
      <Flex vertical gap={4} style={{ marginBottom: 24 }}>
        <Title level={1} style={{ margin: 0 }}>
          Agenda de Visitas
        </Title>
        <Text type="secondary">Requisito Funcional: RF11</Text>
      </Flex>

      <Flex gap={16} wrap="wrap">
        {agenda.map((item) => (
          <Card
            key={item.dia}
            size="small"
            style={{
              flex: "1 1 140px",
              maxWidth: 180,
              borderColor: item.isToday ? "#dc2626" : undefined,
              borderWidth: item.isToday ? 2 : 1,
              backgroundColor: item.isToday ? "#fef2f2" : undefined,
            }}
            title={
              <Flex align="center" justify="center" gap={6}>
                <Text
                  strong
                  style={{ color: item.isToday ? "#dc2626" : undefined }}
                >
                  {item.dia}
                </Text>
                {item.isToday && <Badge count="Hoje" color="#dc2626" />}
              </Flex>
            }
            styles={{
              header: { textAlign: "center", minHeight: 44 },
              body: { padding: 12 },
            }}
          >
            <Flex
              vertical
              justify="center"
              gap={4}
              style={{
                padding: "10px 12px",
                backgroundColor: item.isToday ? "#fff" : "#f5f5f5",
                borderRadius: 8,
                minHeight: 56,
              }}
            >
              <Text strong style={{ fontSize: 13, lineHeight: 1.3 }}>
                {item.obra}
              </Text>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {item.horario}
              </Text>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Card>
  );
}
