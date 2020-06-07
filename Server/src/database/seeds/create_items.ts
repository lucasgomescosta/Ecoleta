import Knex from 'knex';

export async function seed(knex: Knex){
  await knex('items').insert([
    { id: '1', title: 'Óleo de Cozinha', image: 'oleo.svg'},
    { id: '2', title: 'Lâmpadas', image: 'lampadas.svg'},
    { id: '3', title: 'Pilhas e Baterias', image: 'baterias.svg'},
    { id: '4', title: 'Papéis e Papelão', image: 'papeis-papelao.svg'},
    { id: '5', title: 'Resíduos Eletrônicos', image: 'eletronicos.svg'},
    { id: '6', title: 'Resíduos Orgânicos', image: 'organicos.svg'},
  ]);
}