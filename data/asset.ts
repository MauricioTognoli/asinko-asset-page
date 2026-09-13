import type { Asset } from "@/types/asset";

export const nvdaAsset: Asset = {
  id: "nvda",
  name: "NVIDIA Corp.",
  ticker: "NVDA",
  category: "Semiconductores",
  posts: [
    {
      id: "post-1",
      author: "martincode",
      publishedAt: "hace 3h",
      content:
        "La nueva arquitectura Blackwell ya está copando los pedidos de los hyperscalers. Microsoft y Meta confirmaron ampliación de pedidos para el próximo trimestre. El cuello de botella sigue siendo capacidad de empaquetado en TSMC, no demanda.",
      votes: { upvotes: 128, downvotes: 12 },
      commentCount: 124,
      comments: [
        {
          id: "post-1-c1",
          author: "florv",
          content:
            "¿Alguna fuente de esos números o es lo que se comenta en el sector?",
        },
        {
          id: "post-1-c2",
          author: "renelong",
          content:
            "El cuello de botella en CoWoS viene desde 2023, no es nuevo.",
        },
      ],
    },
    {
      id: "post-2",
      author: "valeinversora",
      publishedAt: "hace 1 día",
      content:
        "A 35x ganancias forward, el mercado ya está descontando varios años de crecimiento a tasas actuales. No digo que sea mala empresa, digo que el precio no deja mucho margen de error.",
      votes: { upvotes: 74, downvotes: 31 },
      commentCount: 317,
      comments: [
        {
          id: "post-2-c1",
          author: "deep.value",
          content:
            "Depende de qué crecimiento asumís para datacenter en 2026. Ahí está la discusión.",
        },
        {
          id: "post-2-c2",
          author: "martincode",
          content:
            "35x forward con revenue creciendo 80% interanual no me parece caro.",
        },
      ],
    },
    {
      id: "post-3",
      author: "shortandlong",
      publishedAt: "hace 2 días",
      content:
        "El CEO vendió otro tramo de acciones esta semana. Ya van varios insiders liquidando posiciones en los últimos meses. ¿Alguien más lo está siguiendo?",
      votes: { upvotes: 45, downvotes: 61 },
      commentCount: 93,
      comments: [
        {
          id: "post-3-c1",
          author: "florv",
          content:
            "La mayoría son ventas programadas (10b5-1), no es necesariamente una señal.",
        },
        {
          id: "post-3-c2",
          author: "valeinversora",
          content:
            "Programadas o no, el volumen viene subiendo trimestre a trimestre.",
        },
      ],
    },
  ],
  theses: [
    {
      id: "thesis-1",
      author: "deep.value",
      publishedAt: "hace 4 días",
      ticker: "NVDA",
      claim: "$NVDA superará los $250 antes del 15 de marzo de 2027",
      targetPrice: 250,
      deadline: "2027-03-15",
      conviction: "high",
      status: "open",
      outcome: null,
      reasoning:
        "El capex de los hyperscalers en infraestructura de IA sigue acelerando de cara a 2027, y NVIDIA mantiene share dominante en entrenamiento e inferencia. El ecosistema CUDA eleva el costo de cambiar de proveedor y sostiene el múltiplo actual.",
      votes: { upvotes: 312, downvotes: 28 },
      commentCount: 2812,
      comments: [
        {
          id: "thesis-1-c1",
          author: "shortandlong",
          content:
            "El argumento de CUDA es el más sólido acá, más que el crecimiento de corto plazo.",
        },
        {
          id: "thesis-1-c2",
          author: "renelong",
          content:
            "¿Qué pasa con esta tesis si un hyperscaler anuncia chip propio a gran escala?",
        },
      ],
    },
    {
      id: "thesis-2",
      author: "shortandlong",
      publishedAt: "hace 3 meses",
      ticker: "NVDA",
      claim: "$NVDA no superará los $200 antes del 30 de junio de 2026",
      targetPrice: 200,
      deadline: "2026-06-30",
      conviction: "medium",
      status: "closed",
      outcome: "correct",
      reasoning:
        "Los chips propios de los hyperscalers vienen reemplazando una porción creciente de su demanda interna, y AMD cierra la brecha de performance más rápido de lo que descuenta el mercado. Es una tesis de compresión de márgenes, no de colapso.",
      votes: { upvotes: 96, downvotes: 22 },
      commentCount: 1459,
      comments: [
        {
          id: "thesis-2-c1",
          author: "deep.value",
          content:
            'El custom silicon lleva años "por llegar" y la brecha de software sigue siendo enorme.',
        },
        {
          id: "thesis-2-c2",
          author: "martincode",
          content:
            "Coincido en la dirección, discrepo en el timing: pensé que esto se jugaba en 2027-2028.",
        },
      ],
    },
  ],
};
