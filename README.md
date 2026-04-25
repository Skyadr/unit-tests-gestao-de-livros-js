# Unit Tests - Gestão de Livros JS

## 📚 Descrição

Projeto de testes automatizados de unidade para uma função de gestão de livros desenvolvida em JavaScript. Este projeto faz parte da **Pós-Graduação em Automação de Testes em Softwares**.

## 🎯 Objetivo

Implementar testes automatizados robustos utilizando **Mocha** e **Node Assert** para validar o comportamento da função `buscarTituloDoLivroPorID`, garantindo confiabilidade e qualidade do código.

## 📋 Funcionalidade Testada

### `buscarTituloDoLivroPorID(id)`

Função que busca o título de um livro através do seu ID em uma base de dados local.

**Parâmetros:**
- `id` (number): Identificador único do livro

**Retorno:**
- (string): Título do livro encontrado ou mensagem de erro

## ✅ Testes Implementados

A suíte de testes cobre os seguintes cenários:

1. **Retorna o título correto para ID válido**
   - Valida se a função retorna o título esperado ao informar um ID existente

2. **Retorna mensagem para ID não encontrado**
   - Valida o comportamento quando um ID válido não existe na base de dados

3. **Lança erro para ID menor que 1**
   - Valida se a função lança um erro ao receber um ID menor que 1

4. **Lança erro para ID igual a nulo**
   - Valida se a função lança um erro ao receber `null` como ID

5. **Lança erro para ID não informado**
   - Valida se a função lança um erro ao receber `undefined` como ID

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **Mocha** - Framework de testes
- **Node Assert** - Biblioteca de asserções nativa do Node.js

## 📦 Instalação

```bash
# Clonar o repositório
git clone https://github.com/Skyadr/unit-tests-gestao-de-livros-js.git

# Entrar no diretório do projeto
cd unit-tests-gestao-de-livros-js

# Instalar dependências
npm install
```

## 🚀 Executar Testes

```bash
# Rodar todos os testes
npm test
```

**Saída esperada:**
```
Testando função buscarTituloDoLivroPorID
  ✔ Retorna o título correto para ID válido
  ✔ Retorna mensagem para ID não encontrado
  ✔ Lança erro para ID menor que 1
  ✔ Lança erro para ID igual a nulo
  ✔ Lança erro para ID não informado

5 passing
```

## 📂 Estrutura do Projeto

```
aula-05-exercicio/
├── src/
│   └── gestaoLivros.js         # Implementação da função
├── test/
│   └── gestaoLivros.test.js    # Suite de testes
├── package.json                 # Dependências do projeto
└── README.md                    # Documentação (este arquivo)
```

## 📖 Base de Dados de Livros

O projeto utiliza um vetor de 5 livros como base de dados local:

| ID | Título | Tema | Preço |
|---|---|---|---|
| 1 | Se Houver Amanhã | Vingança | R$ 49,99 |
| 2 | O Outro Lado da Meia-Noite | Ambição | R$ 56,99 |
| 3 | A Ira dos Anjos | Política | R$ 49,99 |
| 4 | Mestre do Jogo | Poder | R$ 51,00 |
| 5 | Nada Dura Para Sempre | Amizade | R$ 79,99 |

## 📝 Exemplo de Uso

```javascript
import { buscarTituloDoLivroPorID } from './src/gestaoLivros.js';

// Retorna o título com sucesso
console.log(buscarTituloDoLivroPorID(1)); // "Se Houver Amanhã"

// ID não encontrado
console.log(buscarTituloDoLivroPorID(99)); // "ID não encontrado."

// Lança erro para ID inválido
buscarTituloDoLivroPorID(0); // Erro: O ID precisa ser informado ou maior que 0
```

## 🎓 Contexto Acadêmico

Este projeto é parte dos estudos da **Pós-Graduação em Automação de Testes em Softwares**, focando em:

- Conceitos fundamentais de testes unitários
- Boas práticas de escrita de testes
- Frameworks de testes em JavaScript
- Validação de comportamentos esperados e exceções

## 👨‍💻 Autor

Adriano Costa de Queiroz

## 📄 Licença

MIT

---

**Data do Projeto:** Abril/2026
