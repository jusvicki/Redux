import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions';

const Task = ({ task, onEdit }) => {
    const dispatch = useDispatch();

    return (
        <div style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            <span>{task.description}</span>
            <button onClick={() => dispatch(toggleTask(task.id))}>
                {task.isDone ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
    );
};

export default Task;
