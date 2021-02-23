import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";

import './listadenotas.css'

class ListaDeNotas extends Component {


  render() {
    return (
      <ul className="lista-notas">
        {this.props.listNotes.map((noteData, index) => {
          return (
            <li key={index} className="lista-notas-item">
              <CardNota
                dataNote={noteData}
                doDeleteNota={this.props.doDeleteNota}
                idx={index}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
