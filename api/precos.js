// api/precos.js

export default function handler(req, res) {
  const produtos = [
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
      preco: 1.05
    },
    {
      nome: "Leite Meio Gordo 1L",
      mercado: "Continente",
      preco: 0.89
    }
  ];

  res.status(200).json(produtos);
}
