import React, { Component } from 'react';

import Tasks from './Tasks';
import Form from './Form';
import './Main.css';

/** componentes com estado - exportam uma class */
export default class Main extends Component {
  /** método responsável por mudar o estado */
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;
    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /** método responsável por submeter o formulário */
  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: [...newTasks],
        index: -1,
      });
    }
  }

  /** método responsável por capturar a mudaça no input */
  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  /** método responsável por editar uma tarefa */
  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index],
    });
  }

  /** método responsável por deletar uma tarefa */
  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newtasks = [...tasks];

    newtasks.splice(index, 1);

    this.setState({
      tasks: [...newtasks],

    });
  }

  /** método responsável por renderizar o jsx */
  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
