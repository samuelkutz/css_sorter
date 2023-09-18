# CSS Sorter

Esse projeto é uma ferramenta
que recebe uma lista de propriedades de CSS digitados um por vez e os ordena em ordem alfabética.

Ordenar o CSS ajuda a encontrar a propriedade necessária a ser alterada mais rapidamente e essa ferramenta pode ser utilizada para checar a ordenação de qualquer lista de styles. 

## Baixando o Git

Para iniciar, instale o Git em sua maquina seguindo os passos deste [link](https://git-scm.com/book/pt-pt/v2/Começando-Instalar-o-Git).


## Como Clonar o Projeto

Para clonar este projeto em sua máquina local, siga estas etapas:

1. Abra seu terminal ou prompt de comando.

2. Navegue até a pasta onde você deseja armazenar o projeto usando o comando `cd`:

   ```shell
   cd caminho/para/sua/pasta
   ```

3. Clone o repositório do GitHub:

   ```shell
   git clone https://github.com/samuelkutz/css_sorter
   ```

## Navegando até a Pasta Necessária

Depois de clonar o projeto, navegue até a pasta raiz do projeto:

```shell
cd seuprojeto
```

## Instalando as Dependências

Certifique-se de ter [Node.js e npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (gerenciador de pacotes do Node.js) instalados em sua máquina.

Para instalar as dependências do projeto, execute o seguinte comando na pasta raiz do projeto:

```shell
npm install
```

## Exemplos de uso

Para exemplificar, vamos 

1. **Exemplo de Requisição GET:**

   ```shell
   curl -X GET http://localhost:3000/api/exemplo
   ```

2. **Exemplo de Requisição POST:**

   ```shell
   curl -X POST -H "Content-Type: application/json" -d '{"chave": "valor"}' http://localhost:3000/api/exemplo
   ```

## Exemplos de Respostas

Aqui estão alguns exemplos de respostas que você pode esperar do seu projeto:

**Resposta de Sucesso (HTTP 200 OK):**

```json
{
  "mensagem": "Requisição bem-sucedida.",
  "dados": {
    "chave": "valor"
  }
}
```

**Resposta de Erro (HTTP 400 Bad Request):**

```json
{
  "erro": "Requisição inválida.",
  "detalhes": "Falta a chave 'chave' no corpo da requisição."
}
```

## Documentação de Referência

Para obter mais informações sobre como usar este projeto, consulte a documentação de referência:

- [Link para a Documentação do Projeto](https://exemplo.com/documentacao)

Certifique-se de atualizar os links e informações específicas do seu projeto conforme necessário. Este README deve servir como um guia rápido para outros desenvolvedores que desejam usar ou contribuir para o seu projeto.