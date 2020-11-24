import React, { Component } from "react";
import CardNota from "./CardNota";

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
        {this.state.notas.map((NoteData) => {
          return (
            <li>
              <div>{NoteData.title}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
