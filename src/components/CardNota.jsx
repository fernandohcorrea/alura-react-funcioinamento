import React, { Component } from "react";

class CardNota extends Component {
  
  state = {};

  render() {
    return (
        <section>
          <header className="nota-list-header">
            <h3>Titulo</h3>
          </header>
          <p>Texto da nota</p>
        </section>
    );
  }
}

export default CardNota;