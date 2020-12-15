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


  render(){
    return (
      <section className="conteudo">
        <FormCadastro createNote={this.criarNota.bind(this)} />
        <ListaDeNotas listNotes={this.state.dataNotes}/>
      </section>
    );
  } 
}

export default App;