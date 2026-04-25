// 1) Criar um vetor com 5 livros contendo as seguintes propriedades: ID, titulo, tema, preco.

// 2) [Básico] Crie uma função que receba o ID de um livro e retorne o seu titulo. Exemplo de chamada da função:
//    buscarTituloDoLivroPorID(99) -> 'Titulo do Livro de ID 99'
// 3) Escreva um test automatizado de unidade para testar a condição de busca do titulo por ID.

// 4) [Avançado] Validar se o ID foi informado e é maior que 0.
// 5) Escreva dois testes automatizados de unidade para testar as condições de envio incorreto de ID.
// 6) Adicionar o Mochawesome para gerar relatórios em HTML.

const livros = [
    {
        ID: 1,
        titulo: 'Se Houver Amanhã',
        tema: 'Vingança',
        preco: 49.99
    },
    {
        ID: 2,
        titulo: 'O Outro Lado da Meia-Noite',
        tema: 'Ambição',
        preco: 56.99
    },
    {
        ID: 3,
        titulo: 'A Ira dos Anjos',
        tema: 'política',
        preco: 49.99
    },
    {
        ID: 4,
        titulo: 'Mestre do Jogo',
        tema: 'Poder',
        preco: 51
    },
    {
        ID: 5,
        titulo: 'Nada Dura Para Sempre',
        tema: 'amizade',
        preco: 79.99
    }
]
// 2) [Básico] Crie uma função que receba o ID de um livro e retorne o seu titulo. Exemplo de chamada da função:
//    buscarTituloDoLivroPorID(99) -> 'Titulo do Livro de ID 99'
export function buscarTituloDoLivroPorID(id) {
    if (id == null || id <= 0) {
        throw new Error('O ID precisa ser informado ou maior que 0');
    }

    for (let i = 0; i < livros.length; i++) {
        if (livros[i].ID === id) {
            return livros[i].titulo;
        }
    }

    return 'ID não encontrado.';
};

