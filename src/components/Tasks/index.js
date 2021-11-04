import React from 'react';
import PropTypes from 'prop-types';

import './Tasks.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <div>
            <FaEdit
              className="edit"
              title="editar"
              onClick={(e) => handleEdit(e, index)}
            />
            <FaWindowClose
              className="delete"
              title="excluir"
              onClick={(e) => handleDelete(e, index)}
            />
          </div>
        </li>

      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
