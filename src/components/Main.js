import React, { Component } from 'react';

// form
import { FaPlus } from 'react-icons/fa';

// tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

/** componentes com estado - exportam uma class */
export default class Main extends Component {
  /** método responsável por mudar o estado */
  state = {
    newTask: '',
    tasks: [],
  }

  /** método responsável por submeter o formulário */
  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    this.setState({
      tasks: [...newTasks, newTask],
    });
  }

  /** método responsável por capturar a mudaça no input */
  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  /** método responsável por renderizar o jsx */
  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" onSubmit={this.handleSubmit} className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit" title="editar" />
                <FaWindowClose className="delete" title="excluir" />
              </div>
            </li>

          ))}
        </ul>
      </div>
    );
  }
}
