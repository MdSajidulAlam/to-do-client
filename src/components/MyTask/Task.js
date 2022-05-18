import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const Task = ({ task }) => {
    const [complete, setComplete] = useState(false)
    const handleComplete = () => {
        setComplete(!complete)
    }
    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            const url = `http://localhost:5000/task/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Item deleted')
                })
        }
    }
    return (
        <Card className='col-4' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{task.taskName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text className={`${complete ? 'text-decoration-line-through' : ''}`}>
                    {task.taskDescription}
                </Card.Text>
                <button onClick={handleComplete} className='btn btn-primary'>Complete</button>
                <button onClick={() => handleDelete(task._id)} className='btn btn-danger mx-2'>Delete</button>
            </Card.Body>
        </Card >
    );
};

export default Task;