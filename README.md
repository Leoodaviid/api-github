<p>Este projeto é um aplicativo web que permite aos usuários procurar um usuário do GitHub por seu nome de usuário e recuperar informações sobre esse usuário e uma lista de seus repositórios fazendo uso da API do GitHub para recuperar os dados necessários.</p>

Link : <a href="https://api-github-beta.vercel.app">https://api-github-beta.vercel.app</a>



## Tecnologias:

- Typescript

- React

- Axios

- React Router DOM

- Styled-Components

- Styled-Normalize

  

## Instalação:

Para instalar as dependências, execute o seguinte comando:

```
npm install ou yarn install
```



## Uso:

Para iniciar o projeto, execute o seguinte comando:

```
npm start ou yarn start
```

Isso iniciará o projeto em`http://localhost:3000`.





## Estrutura dos arquivos:



```

├── public/
|	├── favi.ico 
|   ├── index.html
|   ├── logo192.png
|   ├── logo512.png
|   ├── manifest.json
|   ├── robots.txt
├── src/
|   ├── assets/
|   |   ├── icons/
|   |   |	├── github-logo.svg
|   ├── components/
|   |   ├── CardRepository/
|   |   |	├── CardRepository.tsx
|   |   |	├── styles.ts
|   |   ├── Filter/
|   |   |	├── Filter.tsx
|   |   |	├── styles.ts
|   |   ├── Form/
|   |   |	├── Input.tsx
|   |   |	├── styles.ts
|   |   ├── Helper/
|   |   |	├── Error.tsx
|   |   |	├── langColors.ts
|   |   |	├── styles.ts
|   |   ├── Loading/
|   |   |	├── Loading.tsx
|   |   |	├── styles.ts
|   |   ├── Profile/
|   |   |	├── Profile.tsx
|   |   |	├── styles.ts
|   |   ├── Repository/
|   |   |	├── Repository.tsx
|   |   |	├── styles.ts
|   ├── context/
|   |   ├── RepositoriesContext.tsx
|   |   |
|   ├── hooks/
|   |   ├── useForm.tsx
|   |   ├── useRepo.tsx
|   |   |
|   ├── models/
|   |   ├── models.ts
|   |   |
|   ├── pages/
|   |   ├── Main/
|   |   |	├── index.tsx
|   |   |   ├── styles.ts
|   |   ├── Repositories/
|   |   |	├── Repositories.tsx
|   |   |   ├── styles.ts
|   |   |	|
|   ├── services/
|   |   ├── MainApi/
|   |   |	├── config/
|   |   |	|	├── api.ts
|   |   |	├── langRepositories.ts
|   |   |	├── user.ts
|   ├── styles/
|   |   ├── Theme.tsx
|   |   ├── global.ts
|   |   ├── styled.d.ts
|   ├── App.test.tsx
|   ├── App.tsx
|   ├── index.tsx
|   ├── react-app-env.d.ts
|   ├── reportWebVitals.ts
|   ├── routes.tsx
|   ├── setupTests.ts
├── .editorconfig
├── .env
├──  .env.exemple
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── .tool-versions
├── db.json
├──  package-lock.json
├── package.json
├──  routes.json
└── tsconfig.json



```



## Descrição de alguns diretórios importantes:



- `public/`: Contém o arquivo index.html do aplicativo e quaisquer outros recursos estáticos.
- `src/`: Contém todo o código do aplicativo, incluindo o arquivo `index.ts` principal e vários componentes React e arquivos TypeScript.
- `src/components/`: Contém componentes React individuais que compõem a interface do usuário do aplicativo.
- `src/context/`: Contexto, usado para fornecer dados aos componentes que envolvem toda a aplicação. 
- `src/hooks/`: Contém hooks personalizados que que me auxiliaram no desenvolvimento do projeto.
- `src/models/`: Contém os modelos de tipagem utilizados na aplicação.
- `src/pages/`: Onde contém as páginas que serão renderizadas pra o usuário.
- `src/services/`: Onde contém a configuração da api juntamente com os endpoints que foram utilizados.
- `package.json`: Contém metadados sobre o projeto, incluindo suas dependências e scripts para criar e executar o aplicativo.



## Detalhes e funções de alguns arquivos:



- `src/componentes/CarRepository/CardRepository.tsx`: O componente renderiza um contêiner que exibe o nome, a descrição, o idioma e um link para o repositório. O componente também usa uma função auxiliar languageColors para definir a cor do contêiner com base no idioma do repositório.

- `src/components/Filter/Filter.tsx`: Esse componente possui três adereços:linguagens: uma matriz de objetos com propriedades nome, contagem e cor. Estes representam as diferentes linguagens de programação disponíveis para filtragem.
currentLanguage (opcional): uma string representando o idioma atualmente selecionado.
onClick: uma função de retorno de chamada que é chamada quando um botão de filtro de idioma é clicado. Leva em um argumento, que é o nome do idioma que foi clicado (como uma string).
O componente renderiza um contêiner div que contém vários botões de filtro (um para cada idioma na matriz prop de idiomas). Cada botão é um componente Seletor com fundo colorido que representa a cor do idioma, bem como o nome do idioma e a contagem de repositórios que usam esse idioma. A propriedade currentLanguage é usada para determinar qual botão de filtro deve ter a classe "selecionada" aplicada a ele, indicando qual idioma está selecionado no momento. Clicar em um botão de filtro chama o suporte onClick com o nome do idioma que foi clicado.

- `src/componentes/form/input.tsx`: Esse código define um componente funcional chamado Input, que é um campo de entrada personalizado para um formulário. O componente Input renderiza um elemento input com os atributos fornecidos, bem como um elemento label para o rótulo, um elemento span para algum estilo e um componente Error para exibir quaisquer mensagens de erro. Quando o usuário digita no campo de entrada, a função onChange é chamada, e quando o campo de entrada perde o foco, a função onBlur é chamada. Essas funções são passadas como props do componente pai, que pode usá-las para atualizar o valor do campo de entrada e executar qualquer validação necessária ou outras ações.

- `src/componentes/Profile/Profile.tsx`: Esse código recebe um objeto de usuário como prop contendo informações sobre um usuário do GitHub.O componente exibe o avatar, login, nome e detalhes adicionais do usuário, como número de seguidores, seguidores, empresa, localização e blog. Também inclui um botão Voltar que permite ao usuário retornar à página anterior. O componente também importa o gancho useRepo do arquivo useRepo.tsx, que é um gancho customizado que fornece acesso ao contexto RepositoriesContext e a enumeração FormActions do mesmo arquivo de contexto. Eles são usados para despachar ações para atualizar o estado do aplicativo. No geral, o componente Profile fornece uma interface simples para exibir informações do usuário e permite que o usuário retorne à página anterior.

- `src/componentes/Repository/Repository.tsx`: Este código exporta um componente Repository que recebe um array de repositórios e uma string opcional currentLanguage como props. Ele filtra os repositórios com base no idioma atual e mapeia cada repositório filtrado para um componente CardRepository, passando o objeto do repositório como um suporte. O componente Repository renderiza um contêiner com todos os componentes CardRepository que foram mapeados dos repositórios filtrados.

- `src/context/RepositoriesContext.tsx`: Este é um contexto React que fornece informações sobre um usuário e seus repositórios. O RepositoriesContext exporta uma função createContext que cria o objeto de contexto. O componente RepositoriesStorage envolve todo o aplicativo e fornece o contexto para todos os seus filhos. Ele define o estado inicial para o campo de login e configura uma função redutora que atualiza esse campo. Ele também configura variáveis de estado para usuário, repositórios, idiomas, carregamento e erro. O gancho useEffect é executado quando o campo de login é alterado. Ele faz solicitações de API para recuperar dados do usuário e do repositório e atualiza as variáveis de estado de acordo. Se houver um erro durante a solicitação, ele define a variável de estado de erro. O RepositoriesContext fornece uma propriedade de valor que contém todas as funções de estado e utilitário que podem ser acessadas por seus filhos.

- `src/pages/Main/index.tsx`: Este componente renderiza um formulário da pagina principal da aplicação, simples com um campo de entrada para pesquisar os repositórios de um usuário do GitHub. O componente importa algumas dependências como useForm e useNavigate do pacote react-router-dom, bem como um hook personalizado useRepo da pasta hooks, que permite interagir com o RepositoriesContext e despachar uma ação para armazenar o login do usuário no contexto.A função handleNext é chamada quando o usuário clica no botão de pesquisa ou pressiona Enter. Ele primeiro impede o comportamento de envio de formulário padrão, valida a entrada do usuário usando o método validar do gancho useForm e, se for válido, despacha uma ação com o tipo setLogin para atualizar o contexto com o login do usuário e navega para o /user /repositories usando o gancho useNavigate. Finalmente, o componente retorna um contêiner div com uma imagem de logotipo, um título e o formulário de pesquisa contendo um campo de entrada para o login do usuário e um botão com um ícone de pesquisa.

- `src/pages/Repositories/Repositories.tsx`: Este componente exibe a página dos repositórios de um usuário no GitHub. Começa extraindo dados do gancho useRepo, que fornece acesso aos repositórios e outras informações sobre o usuário. Ele também configura um estado para currentLanguage e uma função onFilterClick para filtrar os repositórios com base no idioma selecionado. Verifica qualquer estado de carregamento ou erro e renderiza os componentes correspondentes. Se não houver carregamento ou erro, ele renderiza os componentes Perfil e Filtro na barra lateral e o componente Repositório na área principal. O componente Repository usa os repositórios e currentLanguage como props e filtra os repositórios com base no idioma atual, se houver. Por fim, ele exporta o componente Repositórios como a exportação padrão do módulo.

- `src/services/mainApi/langRepositories.ts`: Esta é uma função utilitária que recebe uma matriz de repositórios e retorna uma matriz de idiomas usados nesses repositórios, junto com sua contagem e cor. A função começa inicializando um objeto vazio chamado languageCounts. Em seguida, itera sobre cada repositório na matriz e recupera a propriedade de idioma do repositório. Se o idioma for nulo, a iteração será ignorada.
Se o idioma já existir no objeto languageCounts, a contagem será incrementada em um. Caso contrário, uma nova chave com o nome do idioma é criada e a contagem é definida como um.
Após todos os repositórios terem sido processados, a função cria uma matriz de dados de idioma mapeando as chaves do objeto languageCounts. Para cada idioma, ele cria um objeto contendo o nome do idioma, a contagem de quantas vezes ele aparece nos repositórios e sua cor (que é recuperada do objeto languageColors).
A matriz de dados de idioma é classificada em ordem decrescente por contagem, para que os idiomas mais usados apareçam no topo. Por fim, a função retorna a matriz de dados do idioma.

- `src/services/mainApi/user.ts`: Essas funções fazem solicitações à API do GitHub usando a biblioteca axios fornecida pela instância baseApi. getUser faz uma solicitação GET para o terminal /users/:username da API do GitHub para recuperar as informações do usuário do nome de usuário fornecido. Ele recebe um objeto LoginUserProps contendo a propriedade userLogin, que é o nome de usuário que está sendo procurado. A resposta conterá um objeto UserProps com informações como nome, biografia, localização e URL do avatar.
getRepos faz uma solicitação GET para o endpoint /users/:username/repos da API do GitHub para recuperar os repositórios do nome de usuário fornecido. Ele recebe um objeto LoginUserProps contendo a propriedade userLogin, que é o nome de usuário que está sendo procurado. A resposta conterá uma matriz de objetos RepositoryProps com informações como nome, descrição, idioma e número de estrelas.

- `src/App.tsx`: Este é um componente funcional React que retorna o componente App principal. O componente envolve todo o aplicativo com o BrowserRouter da biblioteca react-router-dom, que fornece roteamento do lado do cliente. Ele também envolve o aplicativo com um componente Theme personalizado, que fornece ThemeProvider de componentes estilizados, permitindo a definição de variáveis CSS globais a serem aplicadas a todos os componentes de componentes estilizados. O componente também renderiza o componente AppRoutes, que define as rotas do aplicativo e aplica os componentes GlobalStyle e Normalize de styled-components e styled-normalize library, respectivamente, para normalizar estilos CSS em diferentes navegadores. Por fim, o componente envolve todo o aplicativo com um componente RepositoriesStorage personalizado, que fornece gerenciamento de estado ao aplicativo usando a API React Context.

- `src/routes.tsx`: Código está sendo usado a biblioteca react-router-dom para definir as rotas do aplicativo. Ele é responsável por renderizar os componentes de rota apropriados com base no caminho de URL atual.

















