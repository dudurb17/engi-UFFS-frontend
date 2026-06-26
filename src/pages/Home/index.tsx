import { Badge, Card, Flex, Typography } from "antd";
import { agenda } from "../../mocks/agenda";
import Header from "../../components/Header";
import {
  agendaCardStyles,
  getAgendaCardStyle,
  getAgendaDayTitleStyle,
  getAgendaItemStyle,
  horarioText,
  obraText,
} from "./styles";

const { Text } = Typography;

export function Home() {
  return (
    <Card>
      <Header title="Agenda de Visitas" subtitle="Requisito Funcional: RF11" />
      <Flex gap={16} wrap="wrap">
        {agenda.map((item) => (
          <Card
            key={item.dia}
            size="small"
            style={getAgendaCardStyle(item.isToday)}
            title={
              <Flex align="center" justify="center" gap={6}>
                <Text strong style={getAgendaDayTitleStyle(item.isToday)}>
                  {item.dia}
                </Text>
                {item.isToday && <Badge count="Hoje" color="#dc2626" />}
              </Flex>
            }
            styles={agendaCardStyles}
          >
            <Flex
              vertical
              justify="center"
              gap={4}
              style={getAgendaItemStyle(item.isToday)}
            >
              <Text strong style={obraText}>
                {item.obra}
              </Text>
              <Text type="secondary" style={horarioText}>
                {item.horario}
              </Text>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Card>
  );
}
