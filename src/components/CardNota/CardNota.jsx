import React, { Component } from "react";

import './cardnota.css'

class CardNota extends Component {
  
  dataNote = {};

  constructor(props) {
    super(props);
    this.dataNote = {}
  }

  render() {
    return (
        <section className="card-nota">
          <header className="card-nota-cabecalho ">
          <h3 className="card-nota-title">{this.props.dataNote.title}</h3>
          </header>
          <p className="card-nota-text">{this.props.dataNote.note}</p>
        </section>
    );
  }
}

export default CardNota;