import React, { Component } from "react";
import CardNota from './CardNota'

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="list">
        <li>
          <CardNota/>
        </li>
        <li>
          <CardNota/>
        </li>
        <li>
          <CardNota/>
        </li>
      </ul>
    );
  }

}

export default ListaDeNotas
