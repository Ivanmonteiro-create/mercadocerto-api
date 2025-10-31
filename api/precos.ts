// api/precos.ts

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const dados = [
    // arroz
    { nome: "Arroz Agulha 1kg", mercado: "Minipreço", preco: 0.9 },
    { nome: "Arroz Agulha 1kg", mercado: "Pingo Doce", preco: 0.99 },
    { nome: "Arroz Agulha 1kg", mercado: "Continente", preco: 1.05 },

    // leite
    { nome: "Leite Meio Gordo 1L", mercado: "Continente", preco: 0.89 },
    { nome: "Leite Meio Gordo 1L", mercado: "Pingo Doce", preco: 0.92 },
    { nome: "Leite Meio Gordo 1L", mercado: "Minipreço", preco: 0.95 },

    // massa
    { nome: "Massa Esparguete 500g", mercado: "Continente", preco: 0.69 },
    { nome: "Massa Esparguete 500g", mercado: "Pingo Doce", preco: 0.72 },
    { nome: "Massa Esparguete 500g", mercado: "Minipreço", preco: 0.75 },

    // óleo
    { nome: "Óleo de Girassol 1L", mercado: "Pingo Doce", preco: 1.75 },
    { nome: "Óleo de Girassol 1L", mercado: "Continente", preco: 1.79 },
    { nome: "Óleo de Girassol 1L", mercado: "Minipreço", preco: 1.83 }
  ];

  res.status(200).json(dados);
}
