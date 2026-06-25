import fundacaoImage from "../assets/fundacao.jpeg";
import imagesImage from "../assets/images.jpeg";

export type Clima = "Nublado" | "Ensolarado";

export type RegistroDiario = {
  id: number;
  clima: Clima;
  obra: string;
  etapa: string;
  data: string;
  horario: string;
  responsavel: string;
  descricao: string;
  imagem: string;
};

export const registrosDiario: RegistroDiario[] = [
  {
    id: 1,
    clima: "Nublado",
    obra: "residencia alpha",
    etapa: "Fundaçção - Estacas",
    data: "24/06/2026",
    horario: "10:00",
    responsavel: "João da Silva",
    descricao:
      "Acompanhamento da perfuração das estacas hélice contínua. Terreno apresenta boa resistência conforme indicava a sondagem. Foram concretadas 12 estacas no período da tarde sem intercorrências.",
    imagem: fundacaoImage,
  },
  {
    id: 2,
    clima: "Ensolarado",
    obra: "",
    etapa: "Fundaçção - Estacas",
    data: "23/06/2026",
    horario: "08:30",
    responsavel: "Maria Santos",
    descricao:
      "Início da escavação das estacas no bloco B. Condições climáticas favoráveis permitiram ritmo acelerado de trabalho. Concretagem de 8 estacas concluída até o meio-dia, com controle de slump dentro do especificado.",
    imagem: imagesImage,
  },
];
