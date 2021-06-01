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
            categorias={this.categorias}
            notas={this.notas} />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            categorias={this.categorias}
          />
          <ListaDeNotas notas={this.notas} />
        </main>
      </section>
    );
  }
}

export default App;