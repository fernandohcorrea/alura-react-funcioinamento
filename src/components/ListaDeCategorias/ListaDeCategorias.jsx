import React, { Component } from "react";

import "./listadecategorias.css";

class ListaDeCategorias extends Component {

  constructor(props) {
    console.log(props);
    super(props);
  }

  onKeyUp(event){
    if(event.key === 'Enter'){
      this.props.doCreateCategoria(event.target.value);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.listaDeCategorias.map((categoria, index) => {
            return (
              <li className="lista-categorias_item" key={index}>
                {categoria.title}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Adicionar Categoria"
          className="lista-categorias_input"
          onKeyUp={this.onKeyUp.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
