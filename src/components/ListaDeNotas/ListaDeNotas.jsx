import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";

import './listadenotas.css'

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
      {
        title: "qwe",
        text: "qweqweqwe",
      },
      {
        title: "qwe",
        text: "qweqweqwe",
      },
      {
        title: "qwe",
        text: "qweqweqwe",
      },
      {
        title: "qwe",
        text: "qweqweqwe",
      },
      {
        title: "qwe",
        text: "qweqweqwe",
      },
      {
        title: "zxc",
        text: "zxczxczxc",
      }
    ],
  };

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((NoteData, index) => {
          return (
            <li key={index} className="lista-notas-item">
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
