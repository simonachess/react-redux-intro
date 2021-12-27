import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { markDone, deleteTodo } from '../../store/actions/TodoActions';
import filterTodo from '../../utilities/filterTodo'


const TodoList = (props) => {
    const { todos, markDone, status, deleteTodo } = props
    if (!todos.length) {
        return (
            <p>No todo items</p>
        )
    }

    const filterTodos = filterTodo(todos, status)

    return (
        <ListGroup>
            {
                filterTodos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        mark={markDone}
                        remove={deleteTodo} />
                ))
            }

        </ListGroup>
    )
}

const mapDispatchToProps = state => ({
    todos: state.todos.todos,
    status: state.todos.filter,

})

export default connect(mapDispatchToProps, { markDone, deleteTodo })(TodoList)