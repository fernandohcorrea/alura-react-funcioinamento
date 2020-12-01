import React, { Component } from "react";

import './cardnota.css'

class CardNota extends Component {
  
  state = {};

  render() {
    return (
        <section className="card-nota">
          <header className="card-nota-cabecalho ">
            <h3 className="card-nota-title">Titulo</h3>
          </header>
          <p className="card-nota-text">Texto da nota</p>
        </section>
    );
  }
}

export default CardNota;