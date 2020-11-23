import React, { Component } from "react";

class FormCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Enter Title" />
        <textarea placeholder="Note"></textarea>
        <input type="button" name="Send" value="Send" />
      </form>
    );
  }
}

export default FormCadastro