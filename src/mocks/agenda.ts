export type AgendaItem = {
  dia: string;
  obra: string;
  horario: string;
  isToday: boolean;
};

export const agenda: AgendaItem[] = [
  { dia: "Seg", obra: "Obra Cláudio", horario: "09:00", isToday: false },
  { dia: "Ter", obra: "Obra Beltrao", horario: "10:00", isToday: false },
  { dia: "Qua", obra: "Obra Cleyton", horario: "11:00", isToday: false },
  { dia: "Qui", obra: "Obra Eder", horario: "12:00", isToday: false },
  { dia: "Sex", obra: "Obra Maurício", horario: "13:00", isToday: true },
];
