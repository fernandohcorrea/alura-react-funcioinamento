import React, { Component } from "react";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="list">
        <section>
          <header className="nota-list-header">
            <h3>Titulo</h3>
          </header>
          <p>Texto da nota</p>
        </section>
      </ul>
    );
  }
}
