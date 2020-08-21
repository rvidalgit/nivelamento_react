Projeto criado com o [Create React App](https://github.com/facebook/create-react-app).

# Antes de começar

Para utilizar o React é necessário ter instalado o Node e um gerenciador de pacote (Yarn ou Npm).

1 - [https://nodejs.org/en/download/](https://nodejs.org/en/download/)<br/>
2 - [https://classic.yarnpkg.com/pt-BR/docs/install](https://classic.yarnpkg.com/pt-BR/docs/install)

## Principais Scripts

Poderá utilizar os seguintes scripts:

### `yarn start`

Roda o app em modo de desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) e veja no navegador.

A página será recarregada ao editar o código fonte.<br />
Observe os erros e alertas pelo console.

## Etapas:

### 1 - Criando o projeto com o criador padrão do Facebook.
[Página do GitHub que dá as instruções de como começar](https://github.com/facebook/create-react-app)

```
$ yarn create react-app nivelamento-react
```

### 2 - Configurando o reset css.
Acesse o link para conhecer [https://meyerweb.com/eric/tools/css/reset](https://meyerweb.com/eric/tools/css/reset)

### 3 - Removido o css não utilizado (App.css).

### 4 - Removido o serviceWorker.js, pois não teremos um PWA.

### 5 - Configurando o React-Redux.
Acesse para conhecer [Exemplos do React-Redux](https://redux.js.org/basics/example).

Para configurar o Redux será necessário adicionar duas dependências:

1 - redux `yarn add react-redux`<br/>
2 - react-redux `yarn add react-redux`

E para acompanhar a mudança do estado na store é necessário instalar o DEV TOOLS na aplicação e no navegador.

3 - redux-devtools `yarn add --dev redux-devtools-extension`<br/>
4 - [Redux DevTools - Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pt-BR)<br/>
5 - [Redux DevTools - Firefox](https://addons.mozilla.org/pt-BR/firefox/addon/reduxdevtools/?src=search)

Aproveitando o gancho, seguem mais duas extensões muito importantes para debugar o código pelo navegador.

6 - [React DevTools - Chrome](https://addons.mozilla.org/pt-BR/firefox/addon/react-devtools/?src=search)<br/>
7 - [React DevTools - Firefox](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

### 6 - Configurando o React Router.
[Acesse aqui para ver a documentação](https://reactrouter.com/web/guides/quick-start)

Para configurar o React Router Dom será necessário inserir as seguintes dependências:

1 - react-router `yarn add -T react-router@5.2.0`<br/>
2 - react-router-dom `yarn add -T react-router-dom@5.2.0`<br/>
3 - history `yarn add -T history@4.10.1`<br/>
4 - connected-react-router `yarn add -T connected-react-router@6.8.0`