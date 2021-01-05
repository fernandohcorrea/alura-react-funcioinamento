import React, { Component } from 'react';

import ListaDeNotas from '../components/ListaDeNotas';
import FormCadastro from '../components/FormCadastro';

import './App.css';
class App extends Component {

  listNotes = [];

  constructor(props) {
    super(props);

    this.state = {
      dataNotes: []
    }
  }


  criarNota(title, note){
    const newNote = {title, note};
    this.listNotes = [...this.listNotes, newNote];
    this.setState({dataNotes : this.listNotes});
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


  render(){
    return (
      <section className="conteudo">
        <FormCadastro createNote={this.criarNota.bind(this)} />
        <ListaDeNotas listNotes={this.state.dataNotes} doDeleteNota={this.deletarNota.bind(this)}/>
      </section>
    );
  } 
}

export default App;