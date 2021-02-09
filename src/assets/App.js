import React, { Component } from 'react';

import ListaDeNotas from '../components/ListaDeNotas';
import FormCadastro from '../components/FormCadastro';
import ListaDeCategorias from '../components/ListaDeCategorias';

import './App.css';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataNotes: [],
      dataListaDeCategorias: []
    }
  }


  criarNota(title, note){
    const newNote = {title, note};
    const listNotes = [...this.state.dataNotes, newNote];
    const newState = {...this.state, dataNotes: listNotes};
    this.setState(newState);
  }



  deletarNota(index){
    let arrayNotas = this.state.dataNotes;
    arrayNotas.splice(index,1);
    this.setState(
      Object.apply(this.state, {
        dataNotes: arrayNotas
      })
    )
  }

  createCategoria(title) {
    const newCategory = { title };
    const listaDeCategorias = [ ...this.state.dataListaDeCategorias, newCategory ];

    const newState = {...this.state, dataListaDeCategorias:listaDeCategorias };
    
    this.setState(
      newState
    );
  }


  render(){
    return (
      <section className="conteudo">
        <FormCadastro createNote={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias listaDeCategorias={this.state.dataListaDeCategorias} doCreateCategoria={this.createCategoria.bind(this)} />
          <ListaDeNotas listNotes={this.state.dataNotes} doDeleteNota={this.deletarNota.bind(this)}/>
        </main>
      </section>
    );
  } 
}

export default App;