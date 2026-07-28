const produtosAginaSabores = [
    {
        id: 1,
        nome: "Bolo Decorado Artesanal",
        categoria: "bolos",
        descricao: "Bolo personalizado de luxo para festas e celebrações. Escolha o tamanho ideal e o sabor da massa/recheio.",
        precoBase: 1300,
        imagens: [
            "imagens/bolo6.jpeg",
            "imagens/bolo.jpeg",
            "imagens/bolo3.jpeg",
            "imagens/bolo5.jpeg",
            "imagens/bolos5.webp"
        ],
        opcoes: {
            tamanhos: [
                { nome: "Tamanho 16 (Pequeno)", preco: 1300 },
                { nome: "Tamanho 18 (Médio)", preco: 1500 },
                { nome: "Tamanho 20 (Grande)", preco: 2000 },
                { nome: "Tamanho 22 (Festa XL)", preco: 3000 }
            ],
            sabores: ["Chocolate & Brigadeiro", "Baunilha com Frutas", "Red Velvet", "Doce de Leite com Nozes"]
        }
    },
    {
        id: 2,
        nome: "Bolo Caseiro Tradicional",
        categoria: "bolos",
        descricao: "Aquele bolo fofinho e reconfortante com sabor caseiro, perfeito para acompanhar um bom chá ou café.",
        precoBase: 850,
        imagens: [
            "imagens/bolo8.jpeg", 
            "imagens/bolo4.jpeg"
        ],
        opcoes: {
            sabores: ["Laranja", "Cenoura com Chocolate", "Marmoreado", "Baunilha"]
        }
    },
    {
        id: 3,
        nome: "Chamuças Artesanais (Dúzia)",
        categoria: "salgados",
        descricao: "Porção de 12 unidades de chamuças super crocantes, sequinhas e bem temperadas com especiarias da casa.",
        precoBase: 150,
        imagens: [
            "imagens/chamu.jpeg",
            "imagens/chamussas7.jpeg",
            "imagens/chamussas1.jpeg",
            "imagens/chamussas2.jpeg",
            "imagens/chamussas3.jpeg",
            "imagens/Chamuças.jpg"
        ],
        opcoes: {
            recheios: [
                { nome: "Batata", preco: 150 },
                { nome: "Peixe", preco: 180 },
                { nome: "Frango", preco: 200 },
                { nome: "Carne Moída Premium", preco: 300 }
            ]
        }
    },
    {
        id: 4,
        nome: "Rissóis (Meia-Dúzia)",
        categoria: "salgados",
        descricao: "Porção de 6 unidades de rissóis recheados e empanados com crosta dourada e crocante.",
        precoBase: 200,
        imagens: [
            "imagens/rissois-de-camarao1.jpg",
            "imagens/rissois.jpeg",
            "imagens/rissois2.jpeg",
            "imagens/rissois2.jpg"
        ],
        opcoes: {
            recheios: [
                { nome: "Frango", preco: 200 },
                { nome: "Carne", preco: 200 },
                { nome: "Camarão Especial", preco: 300 }
            ]
        }
    },
    {
        id: 5,
        nome: "Mini Pizzas Artesanais",
        categoria: "salgados",
        descricao: "Mini pizzas deliciosas assadas na hora com molho artesanal e muito queijo. Escolha a porção (6 ou 12 unidades) e o sabor.",
        precoBase: 200,
        imagens: ["imagens/pizza1.jpeg", "imagens/pizza2.jpeg"],
        opcoes: {
            tamanhos: [
                { nome: "Porção de 6 Unidades (Frango / Atum)", preco: 200 },
                { nome: "Porção de 6 Unidades (Carne)", preco: 300 },
                { nome: "Porção de 12 Unidades (Frango / Atum)", preco: 400 },
                { nome: "Porção de 12 Unidades (Carne)", preco: 600 }
            ],
            sabores: ["Frango com Queijo", "Carne Moída", "Atum com Queijo"]
        }
    },
    {
        id: 6,
        nome: "Buquê de Rosas Especiais",
        categoria: "buques",
        descricao: "Arranjo elegante e delicado preparado artesanalmente para presentear alguém inesquecível.",
        precoBase: 200,
        imagens: [
            "imagens/boque.jpeg", 
            "imagens/buque.jpeg", 
            "imagens/buque2.jpeg", 
            "imagens/buque3.jpeg", 
            "imagens/buque4.jpeg"
        ],
        opcoes: {
            tamanhos: [
                { nome: "Simples (1 Rosa)", preco: 200 },
                { nome: "Romântico (3 Rosas)", preco: 350 },
                { nome: "Especial (3 Rosas + Mimos)", preco: 600 },
                { nome: "Premium (5 Rosas)", preco: 700 },
                { nome: "Luxo (5 Rosas + Mimos)", preco: 800 }
            ],
            cores: ["Rosas Vermelhas", "Rosas Cor-de-Rosa", "Rosas Brancas", "Misto"]
        }
    },
    {
        id: 7,
        nome: "Bolo no Pote",
        categoria: "doces",
        descricao: "Delicioso, bem recheado e prático de servir. Diversos sabores à sua escolha.",
        precoBase: 100,
        imagens: ["imagens/bolonopote.jpeg", "imagens/bolonopote9.jpeg", "imagens/bnopote.jpeg"],
        opcoes: {
            sabores: [
                { nome: "Brigadeiro Tradicional", preco: 100 },
                { nome: "Ninho com Nutella", preco: 120 },
                { nome: "Maracujá & Mousse", preco: 120 },
                { nome: "Red Velvet", preco: 150 }
            ]
        }
    }
];
