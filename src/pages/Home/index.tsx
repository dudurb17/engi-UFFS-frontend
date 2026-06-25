import { Badge, Card, Flex, Typography } from "antd";

const { Title, Text } = Typography;

const agenda = [
  { dia: "Seg", descricao: "Obra Cláudio (09:00)", isToday: false },
  { dia: "Ter", descricao: "Obra Beltrao (10:00)", isToday: false },
  { dia: "Qua", descricao: "Obra Cleyton (11:00)", isToday: false },
  { dia: "Qui", descricao: "Obra Eder (12:00)", isToday: false },
  { dia: "Sex", descricao: "Obra Maurício (13:00)", isToday: true },
];

export function Home() {
  return (
    <Card>
      <Title level={2} style={{ marginTop: 0 }}>
        AGENDA DE VISITAS (RF11)
      </Title>
      <Flex gap={20} wrap="wrap">
        {agenda.map((item) => (
          <Card
            key={item?.dia}
            size="small"
            style={{
              width: 150,
              borderColor: item?.isToday ? "#dc2626" : undefined,
              borderWidth: item?.isToday ? 2 : 1,
              backgroundColor: item?.isToday ? "#fef2f2" : undefined,
            }}
            title={
              <Flex align="center" justify="center" gap={4}>
                <Text
                  strong
                  style={{ color: item?.isToday ? "#dc2626" : undefined }}
                >
                  {item?.dia}
                </Text>
                {item?.isToday && <Badge count="Hoje" color="#dc2626" />}
              </Flex>
            }
            styles={{
              header: { textAlign: "center", minHeight: 48 },
              body: { padding: 8 },
            }}
          >
            <Flex
              align="center"
              style={{
                padding: 10,
                backgroundColor: "#f0f0f0",
                borderRadius: 8,
                minHeight: 50,
              }}
            >
              <Text type="secondary" style={{ fontSize: 13 }}>
                {item?.descricao}
              </Text>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Card>
  );
}
