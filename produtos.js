// Banco de dados local para o Panfleto Digital da Agina'Sabores
const produtosAginaSabores = [
    // --- CATEGORIA: BOLOS ---
    {
        id: 1,
        nome: "Bolo Decorado - Tamanho 16",
        categoria: "bolos",
        preco: 1300,
        descricao: "Bolo artesanal perfeito para pequenas celebrações. Tamanho 16, feito com ingredientes premium sob encomenda.",
        imagens: [
           "imagens/bolo1.jpg",
            "imagens/bolos1.webp",
            "imagens/bolos4.jpg",
            "imagens/bolo3.avif",
            "imagens/bolos5.webp",
            "imagens/bolos6.jpg"
        ]
    },
    {
        id: 2,
        nome: "Bolo Decorado - Tamanho 18",
        categoria: "bolos",
        preco: 1500,
        descricao: "Bolo decorado ideal para festas. Tamanho 18. Nota: O valor varia entre 1.500 MZN e 2.000 MZN dependendo do recheio e decoração escolhidos.",
        imagens: [
            "imagens/bolo1.jpg",
            "imagens/bolos1.webp",
            "imagens/bolos4.jpg",
            "imagens/bolo3.avif",
            "imagens/bolos5.webp",
            "imagens/bolos6.jpg"
        ]
    },
    {
        id: 3,
        nome: "Bolo Decorado - Tamanho 20",
        categoria: "bolos",
        preco: 2000,
        descricao: "Bolo magnífico para aniversários e eventos. Tamanho 20. Nota: O valor varia entre 2.000 MZN e 2.500 MZN dependendo dos detalhes da cobertura.",
        imagens: [
            "imagens/bolo1.jpg",
            "imagens/bolos1.webp",
            "imagens/bolos4.jpg",
            "imagens/bolo3.avif",
            "imagens/bolos5.webp",
            "imagens/bolos6.jpg"
        ]
    },
    {
        id: 4,
        nome: "Bolo Decorado - Tamanho 22",
        categoria: "bolos",
        preco: 3000,
        descricao: "Bolo grande e imponente para celebrações marcantes. Tamanho 22, feito com todo o carinho e dedicação para surpreender os convidados.",
        imagens: [
            "imagens/bolo1.jpg",
            "imagens/bolos1.webp",
            "imagens/bolos4.jpg",
            "imagens/bolo3.avif",
            "imagens/bolos5.webp",
            "imagens/bolos6.jpg"
        ]
    },
    {
        id: 5,
        nome: "Bolo Caseiro Tradicional",
        categoria: "bolos",
        preco: 850,
        descricao: "Aquele bolo fofinho e reconfortante com sabor a infância, perfeito para acompanhar um bom chá ou café nas tardes em família.",
        imagens: [
            "imagens/Bolos Caseiros 3.jpeg",
            "imagens/BolosCaseiros.jpg",
            "imagens/BolosCaseiros2.jpg",
            "imagens/BolosCaseiros1.avif"
        ]
    },

    // --- CATEGORIA: SALGADOS ---
    {
        id: 6,
        nome: "Chamuças de Batata (Dúzia)",
        categoria: "salgados",
        preco: 150,
        descricao: "Porção de 12 unidades (uma dúzia) de chamuças de batata super crocantes, sequinhas e bem temperadas com especiarias.",
        imagens: [
            "imagens/Chamucas de batata.jpg"
        ]
    },
    {
        id: 7,
        nome: "Chamuças de Peixe (Dúzia)",
        categoria: "salgados",
        preco: 180,
        descricao: "Porção de 12 unidades (uma dúzia) de chamuças de peixe artesanais, fritas na hora com uma massa leve e muito estaladiça.",
        imagens: [
            "imagens/chamssas peixe.jpg"
        ]
    },
    {
        id: 8,
        nome: "Chamuças de Frango (Dúzia)",
        categoria: "salgados",
        preco: 200,
        descricao: "Porção de 12 unidades (uma dúzia) de chamuças recheadas com frango desfiado suculento e o tempero especial secreto da casa.",
        imagens: [
            "imagens/chamussas frango.jpg"
        ]
    },
    {
        id: 9,
        nome: "Chamuças de Carne (Dúzia)",
        categoria: "salgados",
        preco: 300,
        descricao: "Porção premium de 12 unidades (uma dúzia) de chamuças de carne moída perfeitamente temperada, muito suculentas por dentro e crocantes por fora.",
        imagens: [
            "imagens/chamusa carne.jpg"
        ]
    },
    {
        id: 10,
        nome: "Rissóis de Frango (Dúzia)",
        categoria: "salgados",
        preco: 350,
        descricao: "Porção de 12 unidades de rissóis de frango super cremosos por dentro, com aquela crosta perfeitamente dourada e estaladiça.",
        imagens: ["imagens/rissois2.jpg"]
    },
    {
        id: 11,
        nome: "Rissóis de Carne (Dúzia)",
        categoria: "salgados",
        preco: 400,
        descricao: "Porção de 12 unidades de rissóis recheados com carne bem temperada e suculenta, ideais para petiscar ou para festas.",
        imagens: ["imagens/rissois.jpeg"]
    },
    {
        id: 12,
        nome: "Rissóis de Camarão (Dúzia)",
        categoria: "salgados",
        preco: 600,
        descricao: "Porção especial de 12 unidades de rissóis de camarão premium com recheio cremoso irresistível. Uma verdadeira delícia gourmet.",
        imagens: ["imagens/rissois-de-camarao1.jpg"]
    },
    {
        id: 13,
        nome: "Mini Pizza de Frango",
        categoria: "salgados",
        preco: 200,
        descricao: "Mini pizzas artesanais de frango com queijo derretido. Disponível em porções: 6 unidades por 200 MZN ou 12 unidades por 400 MZN.",
        imagens: ["imagens/pizza1.jpeg"]
    },
    {
        id: 14,
        nome: "Mini Pizza de Carne",
        categoria: "salgados",
        preco: 300,
        descricao: "Mini pizzas deliciosas com recheio de carne e queijo. Disponível em porções: 6 unidades por 300 MZN ou 12 unidades por 600 MZN.",
        imagens: ["imagens/pizza2.jpeg"]
    },
    {
        id: 15,
        nome: "Mini Pizza de Atum",
        categoria: "salgados",
        preco: 200,
        descricao: "Mini pizzas leves e saborosas de atum com queijo e especiarias. Disponível em porções: 6 unidades por 200 MZN ou 12 unidades por 400 MZN.",
        imagens: ["imagens/pizza1.jpeg"]
    },

    // --- NOVA CATEGORIA: BUQUÊS ---
    {
        id: 16,
        nome: "Buquê Simples - 1 Rosa",
        categoria: "buques",
        preco: 200,
        descricao: "Um gesto clássico e elegante. Uma rosa selecionada e embalada com todo o requinte para presentear alguém especial.",
        imagens: [
            "imagens/buque.jpeg", 
            "imagens/buque2.jpeg",
            "imagens/buque3.jpeg",
            "imagens/buque4.jpeg"
        ]
    },
    {
        id: 17,
        nome: "Buquê Romântico - 3 Rosas",
        categoria: "buques",
        preco: 350,
        descricao: "Lindo arranjo composto por 3 rosas frescas e decoração delicada, ideal para surpreender a qualquer momento do dia.",
        imagens: [
            "imagens/buque.jpeg", 
            "imagens/buque2.jpeg",
            "imagens/buque3.jpeg",
            "imagens/buque4.jpeg"
        ]
    },
    {
        id: 18,
        nome: "Buquê Especial - 3 Rosas e Mimos",
        categoria: "buques",
        preco: 600,
        descricao: "Arranjo encantador com 3 rosas acompanhadas de mimos decorativos especiais que tornam o presente ainda mais marcante.",
        imagens: [
            "imagens/buque.jpeg", 
            "imagens/buque2.jpeg",
            "imagens/buque3.jpeg",
            "imagens/buque4.jpeg"
        ]
    },
    {
        id: 19,
        nome: "Buquê Premium - 5 Rosas",
        categoria: "buques",
        preco: 700,
        descricao: "Um buquê imponente e volumoso constituído por 5 rosas frescas rigorosamente selecionadas para causar uma excelente impressão.",
        imagens: [
            "imagens/buque.jpeg", 
            "imagens/buque2.jpeg",
            "imagens/buque3.jpeg",
            "imagens/buque4.jpeg"
        ]
    },
    {
        id: 20,
        nome: "Buquê Luxo - 5 Rosas e Mimos",
        categoria: "buques",
        preco: 800,
        descricao: "A combinação perfeita de beleza e carinho. Arranjo de luxo com 5 rosas e mimos exclusivos para uma homenagem inesquecível.",
        imagens: [
            "imagens/buque.jpeg", 
            "imagens/buque2.jpeg",
            "imagens/buque3.jpeg",
            "imagens/buque4.jpeg"
        ]
    },

    // --- CATEGORIA: COMBOS & PROMOÇÕES ---
    {
        id: 21,
        nome: "Bandeja de Mimos Especial",
        categoria: "promocoes",
        preco: 1500,
        descricao: "O presente completo ideal! Contém: mini bolo decorado, rissóis crocantes, uma maçã de chocolate requintada e sumo. O valor varia entre 1.500 MZN e 2.000 MZN dependendo da personalização. Tem direito a escolher as frutas da sua preferência e optar por Sumo ou Cerveja.",
        imagens: [
            "imagens/promo1.jpeg",
            "imagens/promo2.jpeg",
            "imagens/promo3.jpeg"
        ]
    },

    {
    id: 22,
    nome: "Bolo no Pote",
    categoria: "doces", // <-- Deve ser em minúsculas para o filtro funcionar!
    preco: 100,
    descricao: "Bolo no pote delicioso e fácil de servir. 100/150 MZN dependendo do sabor escolhido.",
    imagens: [
        "imagens/pote2.jpeg",
        "imagens/pote1.jpeg",
        "imagens/pote3.jpeg"

    ]
    },

    {
    id: 23,
    nome: "Musse",
    categoria: "doces", // <-- Deve ser em minúsculas para o filtro funcionar!
    preco: 100,
    descricao: "Musse delicioso e fácil de servir. 100/150 MZN dependendo do sabor escolhido.",
    imagens: [
        "imagens/Musse1.jpeg",
        "imagens/Musse2.jpeg",
    ]
    }
];