import React, { Component } from "react";

import './formcadastro.css'

class FormCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input type="text" className="form-cadastro-input" placeholder="Enter Title" />
        <textarea placeholder="Note" className="form-cadastro-input" rows="15"></textarea>
        <input type="button" name="Send" value="Send" className="form-cadastro-input form-cadastro-btn " />
      </form>
    );
  }
}

export default FormCadastro