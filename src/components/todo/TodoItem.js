import { Card, Button, ListGroupItem } from 'react-bootstrap';
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
            </div>
        </ListGroupItem>
    )
}

export default TodoItem;