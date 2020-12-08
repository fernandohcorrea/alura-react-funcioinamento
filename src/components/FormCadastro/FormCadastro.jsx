import React, { Component } from "react";

import './formcadastro.css'

class FormCadastro extends Component {

  constructor() {
    super();
    this.title = "";
    this.note = "";
  }

  onChangeTitle(event, scope){
    this.title = event.target.value;
  }

  onChangeNote(event){
    this.note = event.target.value;
  }

  onFormCadastroSubmit(event){
    console.table([this.title, this.note]);
    console.log("Enviar");
    this.title = "";
    this.note = "";
    console.log("Apagar");
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this.onFormCadastroSubmit.bind(this)}>
        <input type="text" className="form-cadastro-input" placeholder="Enter Title" onChange={this.onChangeTitle.bind(this)} />
        <textarea placeholder="Note" className="form-cadastro-input" rows="15" onChange={this.onChangeNote.bind(this)}></textarea>
        <input type="button" name="Send" value="Send" className="form-cadastro-input form-cadastro-btn" onClick={this.onFormCadastroSubmit.bind(this)} />
      </form>
    );
  }
}

export default FormCadastro