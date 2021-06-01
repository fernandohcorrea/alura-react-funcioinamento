import React, { Component } from "react";

import './formcadastro.css'

class FormCadastro extends Component {

  constructor({props, categorias, notas}) {
    super(props);

    this.title = "";
    this.note = "";
    this.categoria = "";
    this.categorias = categorias;
    this.notas = notas;
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

  onChangeTitle(event, scope){
    this.title = event.target.value;
  }

  onChangeNote(event){
    this.note = event.target.value;
  }

  onChangeCategoria(event){
    this.categoria = event.target.value;
  }

  onFormCadastroSubmit(event){
    event.preventDefault();
    event.stopPropagation();

    this.notas.add(this.title, this.note, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this.onFormCadastroSubmit.bind(this)}>
        <select className="form-cadastro-input" onChange={this.onChangeCategoria.bind(this)} >
          <option value=''>--Selecione--</option>
          {this.state.categorias.map((categoria, idx) => {
            return (
              <option key={idx} value={idx}>{categoria.title}</option>
            )
          })}
        </select>
        <input type="text" className="form-cadastro-input" placeholder="Enter Title" onChange={this.onChangeTitle.bind(this)} />
        <textarea placeholder="Note" className="form-cadastro-input" rows="15" onChange={this.onChangeNote.bind(this)}></textarea>
        <input type="button" name="Send" value="Send" className="form-cadastro-input form-cadastro-btn" onClick={this.onFormCadastroSubmit.bind(this)} />
      </form>
    );
  }
}

export default FormCadastro