import { ListGroupItem } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { UncontrolledCollapse } from 'reactstrap';

const TodoItem = ({ todo, remove, mark }) => {
    return (
        <ListGroupItem>
            <div className='row'>
                <div className='col-md-7' >
                    <span className='d-flex' id={`toggler${todo.id}`}>
                        {todo.isComplete ? <p><strike>{todo.title}</strike></p> : <p>{todo.title}</p>}
                    </span>
                    <UncontrolledCollapse toggler={`#toggler${todo.id}`}>
                        {todo.descriptionn}
                    </UncontrolledCollapse>
                </div>
                <div className="col-md-5">
                    <div className="ml-auto">
                        <Button color="danger" onClick={() => remove(todo.id)} style={{ marginRight: '10px' }} className="ml-auto">Delete</Button>
                        {
                            !todo.isComplete && <Button color="primary" onClick={() => mark(todo.id)} className="mr-auto">Done</Button>
                        }

                    </div>
                </div>
            </div>
        </ListGroupItem>
    )
}

export default TodoItem;