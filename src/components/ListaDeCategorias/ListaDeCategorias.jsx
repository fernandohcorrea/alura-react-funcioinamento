import React, { Component } from "react";

import "./listadecategorias.css";

class ListaDeCategorias extends Component {

  constructor({props, categorias})
  {
    super(props);
    this.categorias = categorias;
    this.handlerNewCategorias = this._handlerNewCategorias.bind(this);
    this.state = {
      categorias: []
    }
  }

  componentDidMount(){
    this.categorias.subscribe(this.handlerNewCategorias);
  }

  componentWillUnmount(){
    this.categorias.unSubscribe(this.handlerNewCategorias);
  }
  
  _handlerNewCategorias(categorias)
  {
    this.setState({...this.state, categorias})
  }

  onKeyUp(event){
    if(event.key === 'Enter'){
      this.categorias.add(event.target.value);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
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
