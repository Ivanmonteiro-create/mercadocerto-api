// api/precos.ts

import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  // podes depois trocar isto para vir de uma base de dados
  const dados = [
    // ARROZ
    {
      nome: "Arroz Agulha 1kg",
      mercado: "Minipreço",
      preco: 0.9
    },
    {
      nome: "Arroz Agulha 1kg",
      mercado: "Pingo Doce",
      preco: 0.99
    },
    {
      nome: "Arroz Agulha 1kg",
      mercado: "Continente",
      preco: 1.0
    },

    // FEIJÃO
    {
      nome: "Feijão Carioca 1kg",
      mercado: "Minipreço",
      preco: 1.29
    },
    {
      nome: "Feijão Carioca 1kg",
      mercado: "Pingo Doce",
      preco: 1.35
    },
    {
      nome: "Feijão Carioca 1kg",
      mercado: "Continente",
      preco: 1.42
    },

    // LEITE
    {
      nome: "Leite Meio Gordo 1L",
      mercado: "Continente",
      preco: 0.89
    },
    {
      nome: "Leite Meio Gordo 1L",
      mercado: "Pingo Doce",
      preco: 0.95
    },

    // MASSA
    {
      nome: "Massa Esparguete 500g",
      mercado: "Continente",
      preco: 0.69
    },
    {
      nome: "Massa Esparguete 500g",
      mercado: "Minipreço",
      preco: 0.7
    },
    {
      nome: "Massa Esparguete 500g",
      mercado: "Pingo Doce",
      preco: 0.72
    },

    // ÓLEO
    {
      nome: "Óleo de Girassol 1L",
      mercado: "Pingo Doce",
      preco: 1.75
    },
    {
      nome: "Óleo de Girassol 1L",
      mercado: "Continente",
      preco: 1.79
    },
    {
      nome: "Óleo de Girassol 1L",
      mercado: "Minipreço",
      preco: 1.83
    }
  ];

  // permitir o Expo/telemóvel pedir isto
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  return res.status(200).json(dados);
}
