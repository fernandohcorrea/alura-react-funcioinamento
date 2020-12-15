import React, { Component } from "react";

import './formcadastro.css'

class FormCadastro extends Component {

  constructor(props) {
    super(props);

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
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.note)
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