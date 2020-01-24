import React, { Component } from 'react';

export default class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial
  }
  
  maisUm = () => {
    this.alterarNumero(1);
  }
  
  menosUm = () => {
    this.alterarNumero(-1);
  }
  
  alterarNumero = valor => {
    this.setState({
      numero: this.state.numero + valor
    });
  }
  
  render() {
    return (
      <div>
        <h1>Número: {this.state.numero}</h1>
        <button onClick={this.maisUm}>Adicionar 1</button>
        <button onClick={this.menosUm}>Remover 1</button>
        <button onClick={() => this.alterarNumero(10)}>Adicionar 10</button>
        <button onClick={() => this.alterarNumero(-10)}>Remover 10</button>
      </div>
    );
  }
}
  