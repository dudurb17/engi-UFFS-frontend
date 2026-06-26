import type { CSSProperties } from "react";

export const agendaCardStyles = {
  header: { textAlign: "center" as const, minHeight: 44 },
  body: { padding: 12 },
};

export function getAgendaCardStyle(isToday: boolean): CSSProperties {
  return {
    flex: "1 1 140px",
    maxWidth: 180,
    borderColor: isToday ? "#dc2626" : undefined,
    borderWidth: isToday ? 2 : 1,
    backgroundColor: isToday ? "#fef2f2" : undefined,
  };
}

export function getAgendaDayTitleStyle(isToday: boolean): CSSProperties {
  return {
    color: isToday ? "#dc2626" : undefined,
  };
}

export function getAgendaItemStyle(isToday: boolean): CSSProperties {
  return {
    padding: "10px 12px",
    backgroundColor: isToday ? "#fff" : "#f5f5f5",
    borderRadius: 8,
    minHeight: 56,
  };
}

export const obraText: CSSProperties = {
  fontSize: 13,
  lineHeight: 1.3,
};

export const horarioText: CSSProperties = {
  fontSize: 12,
};
