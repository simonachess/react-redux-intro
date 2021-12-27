import { Card, Modal, Form, FormGroup, Button, ListGroupItem } from 'react-bootstrap';
import { UncontrolledCollapse } from 'reactstrap';

import { useState } from 'react';


// const AddTodo = ({ todo, remove, mark }) => (
//     <ListGroupItem>
//         <div className='row'>
//             <div className='col-md-7' >
//                 <span className='d-flex' id={`toggler${todo.id}`}>
//                     {todo.isComplete ? <p><strike>{todo.title}</strike></p> : <p>{todo.title}</p>}
//                 </span>
//                 <UncontrolledCollapse toggler={`#toggler${todo.id}`}>
//                     {todo.descriptionn}
//                 </UncontrolledCollapse>
//             </div>
//         </div>
//     </ListGroupItem>
// )

const AddTodo = () => {
    const [modal, setModal] = useState(false);
    const [task, setTask] = useState({
        title: '',
        description: '',
    })
    const handleClose = () => setModal(false)
    const handleShow = () => setModal(true)

    return (
        <>
            <Button variant='danger' onClick={handleShow}>New task</Button>
            <Modal show={modal} onHide={handleShow}>
                <Modal.Header>
                    Create new task
                </Modal.Header>
                <Form>
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
                                placehlder='add text'
                                onChange={(e) => console.log(e.target.value)}
                            />
                            <Form.Label htmlFor='title'>
                                Description
                            </Form.Label>
                            <Form.Control
                                type='textare'
                                value={task.description}
                                name='description'
                                id='title'
                                placehlder='add description'
                                onChange={(e) => console.log(e.target.value)}
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


export default AddTodo;