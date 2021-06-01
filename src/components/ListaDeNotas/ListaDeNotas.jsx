import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";

import './listadenotas.css'

class ListaDeNotas extends Component {

  constructor({props, notas}) {
    super(props);
    this.notas = notas;

    this.handlerNewNotas = this._handlerNewNotas.bind(this);
 
    this.state = {
      notas: []
    }
  }

  componentDidMount(){
    this.notas.subscribe(this.handlerNewNotas);
  }

  componentWillUnmount(){
    this.notas.unSubscribe(this.handlerNewNotas);
  }

  _handlerNewNotas(notas)
  {
    this.setState({...this.state, notas})
  }

  
  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((noteData, index) => {
          return (
            <li key={index} className="lista-notas-item">
              <CardNota
                dataNote={noteData}
                doDeleteNota={this.notas.delete.bind(this.notas)}
                idx={index}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
