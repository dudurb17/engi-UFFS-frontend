export type PagamentoStatus = "Pago" | "Pendente" | "Atrasado";

export type Pagamento = {
  id: number;
  nome: string;
  cliente: string;
  parcela: string;
  vencimento: string;
  valor: string;
  status: PagamentoStatus;
};

export const pagamentos: Pagamento[] = [
  {
    id: 1,
    nome: "Obra Cláudio",
    cliente: "Cláudio Silva",
    parcela: "1/6",
    vencimento: "10/01/2026",
    valor: "R$ 12.500,00",
    status: "Pago",
  },
  {
    id: 2,
    nome: "Obra Cláudio",
    cliente: "Cláudio Silva",
    parcela: "2/6",
    vencimento: "10/02/2026",
    valor: "R$ 12.500,00",
    status: "Pago",
  },
  {
    id: 3,
    nome: "Obra Cláudio",
    cliente: "Cláudio Silva",
    parcela: "3/6",
    vencimento: "10/03/2026",
    valor: "R$ 12.500,00",
    status: "Pendente",
  },
  {
    id: 4,
    nome: "Obra Beltrao",
    cliente: "Beltrão Construções",
    parcela: "1/4",
    vencimento: "15/02/2026",
    valor: "R$ 18.750,00",
    status: "Pago",
  },
  {
    id: 5,
    nome: "Obra Beltrao",
    cliente: "Beltrão Construções",
    parcela: "2/4",
    vencimento: "15/04/2026",
    valor: "R$ 18.750,00",
    status: "Pendente",
  },
];
