<h1 align="center">
  <img alt="Ecoleta" title="#delicinha" src=".github/ecoleta.png" width="250px" />
  <br/>
  <img alt="Ecoleta" title="#delicinha" src=".github/logo.png" width="250px" />
</h1>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalacao">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 💻 Project
Projeto desenvolvido durante a <strong>Next Level Week</strong> que tem como objetivo facilitar o encontro de coletores de resíduos nas suas proximidades.
O <strong>Ecoleta</strong> serve como um Marketplace, uma conexão entre empresas ou entidade que coletam resíduos, sejam eles orgânicos ou inorgânicos, à pessoas que precisam fazer descarte dos resíduos.

## :rocket: Technologies
Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [Knex](http://knexjs.org/)
- [API do IBGE para consumo do endereço](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)
- [React-Dropzone para upload de imagens](react-dropzone)
- [Leaflet](https://leafletjs.com/examples/quick-start/)
- [Yup](https://github.com/jquense/yup)
- [Celebrate](https://github.com/arb/celebrate)

## 🔖 Layout



## 🔥 instalacao

```bash
# Clone este repositório
$ git clone https://github.com/ronnyacacio/ecoleta.git

# Navegue até a pasta api e execute os seguintes comandos:
$ npx knex migrate:latest
$ npx knex seed:run
$ yarn dev

# Depois disso, entre na pasta web e execute os comandos:
$ yarn
$ yarn start

# E finalmente, entre na pasta mobile e execunte os comandos:
$ yarn
$ expo start

# Observações:
- Não esqueça de mudar a baseURL no arquivo `src/services/api.ts` das pastas web e mobile para o IP da sua máquina
```
