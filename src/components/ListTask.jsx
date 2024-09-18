import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = ({ onEdit }) => {
    const [filter, setFilter] = useState('all');
    const tasks = useSelector(state => state.tasks);

    const filteredTasks = tasks.filter(task => {
        if (filter === 'done') return task.isDone;
        if (filter === 'notDone') return !task.isDone;
        return true;
    });

    return (
        <div>
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('done')}>Done</button>
                <button onClick={() => setFilter('notDone')}>Not Done</button>
            </div>
            <div>
                {filteredTasks.map(task => (
                    <Task key={task.id} task={task} onEdit={onEdit} />
                ))}
            </div>
        </div>
    );
};

export default ListTask;
