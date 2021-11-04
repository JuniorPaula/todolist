import React, { Component } from 'react';

/** componentes com estado - exportam uma class */
export default class Main extends Component {
  /** método responsável por mudar o estado */
  state = {
    newTask: '',
  }

  /** método responsável por capturar a mudaça no input */
  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  /** método responsável por renderizar o jsx */
  render() {
    const { newTask } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
