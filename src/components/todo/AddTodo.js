import { Card, Modal, Form, FormGroup, Button, ListGroupItem } from 'react-bootstrap';
import { UncontrolledCollapse } from 'reactstrap';

import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/TodoActions';


const AddTodo = (props) => {
    const [modal, setModal] = useState(false);
    const [task, setTask] = useState({
        title: '',
        description: '',
    })
    const handleClose = () => setModal(false);
    const handleShow = () => setModal(true);

    const handleChange = (e) => {
        setTask(
            {
                ...task,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = parseInt(Date.now());
        const todo = {
            ...task,
            isComplete: false,
            id: id,
        }
        props.addTodo(todo);
        setTask({});
        setModal(false);
    }

    return (
        <>
            <Button variant='danger' onClick={handleShow}>New task</Button>
            <Modal show={modal} onHide={handleShow}>
                <Modal.Header>
                    Create new task
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label htmlFor='title'>
                                Title
                            </Form.Label>
                            <Form.Control
                                type='text'
                                value={task.title}
                                name='title'
                                id='title'
                                placeholder='add text'
                                onChange={handleChange}
                            />
                            <Form.Label htmlFor='title'>
                                Description
                            </Form.Label>
                            <Form.Control
                                type='textarea'
                                value={task.description}
                                name='description'
                                id='title'
                                placeholder='add description'
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='submit'>
                            Add
                        </Button>
                        <Button onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}


export default connect(null, { addTodo })(AddTodo);