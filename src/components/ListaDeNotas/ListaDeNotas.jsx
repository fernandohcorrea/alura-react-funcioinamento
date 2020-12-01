import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";

class ListaDeNotas extends Component {
  state = {
    notas: [
      {
        title: "asd",
        text: "asdasdasd",
      },
      {
        title: "qwe",
        text: "qweqweqwe",
      },
    ],
  };

  render() {
    return (
      <ul className="list">
        {this.state.notas.map((NoteData, index) => {
          return (
            <li key={index}>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
