export type ProjetoStatus = "Em andamento" | "Concluído" | "Pendente" | "Atrasado";

export type Projeto = {
  id: number;
  nome: string;
  cliente: string;
  localizacao: string;
  cronograma: string;
  status: ProjetoStatus;
};

export const projetos: Projeto[] = [
  {
    id: 1,
    nome: "Obra Cláudio",
    cliente: "Cláudio Silva",
    localizacao: "Chapecó - SC",
    cronograma: "Jan/2026 - Jun/2026",
    status: "Em andamento",
  },
  {
    id: 2,
    nome: "Obra Beltrao",
    cliente: "Beltrão Construções",
    localizacao: "Xanxerê - SC",
    cronograma: "Fev/2026 - Ago/2026",
    status: "Em andamento",
  },
  {
    id: 3,
    nome: "Obra Cleyton",
    cliente: "Cleyton Martins",
    localizacao: "Concórdia - SC",
    cronograma: "Mar/2026 - Set/2026",
    status: "Pendente",
  },
  {
    id: 4,
    nome: "Obra Eder",
    cliente: "Eder Oliveira",
    localizacao: "São Miguel do Oeste - SC",
    cronograma: "Abr/2026 - Out/2026",
    status: "Pendente",
  },
  {
    id: 5,
    nome: "Obra Maurício",
    cliente: "Maurício Alves",
    localizacao: "Palmitos - SC",
    cronograma: "Mai/2026 - Nov/2026",
    status: "Em andamento",
  },
];
