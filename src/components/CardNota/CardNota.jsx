import React, { Component } from "react";

import './cardnota.css'
import {ReactComponent as DeleteSvg} from '../../assets/img/delete.svg' 

class CardNota extends Component {

  doDeleteCardNota() {
    let idx = this.props.idx;
    this.props.doDeleteNota(idx);
  }

  render() {
    return (
        <section className="card-nota">
          <header className="card-nota-cabecalho ">
          <h3 className="card-nota-title">{this.props.dataNote.title}</h3>
          <DeleteSvg onClick={this.doDeleteCardNota.bind(this)}/>
          <h4>{this.props.dataNote.categoria}</h4>
          </header>
          <p className="card-nota-text">{this.props.dataNote.note}</p>
        </section>
    );
  }
}

export default CardNota;