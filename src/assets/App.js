import React, { Component } from 'react';

import './App.css';

import ListaDeNotas from '../components/ListaDeNotas';
import FormCadastro from '../components/FormCadastro';
import ListaDeCategorias from '../components/ListaDeCategorias';
import Categoria from '../models/Categoria';
import Nota from '../models/Nota';

class App extends Component {

  categorias = null;
  notas = null;

  constructor(props) {
    super(props);

    this.categorias = new Categoria();
    this.notas = new Nota();
  }

  render() {
    return (
      <section className="conteudo">
        <FormCadastro
            categorias={this.categorias.data}
            createNote={this.notas.add} />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            listaDeCategorias={this.categorias.data}
            doCreateCategoria={this.categorias.add.bind(this.categorias)} />
          <ListaDeNotas listNotes={this.notas.data} doDeleteNota={this.notas.delete.bind(this.notas)} />
        </main>
      </section>
    );
  }
}

export default App;