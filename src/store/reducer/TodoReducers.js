import { ADD_TODO, FILTER_TODO, MARK_DONE, REMOVE_TODO } from "../actions/types";


//initial state
const init = {
    todos: [
        {
            'title': "Testas",
            'description': "Labai gerai uzduotis",
            'isComplete': false,
            'id': 1234567,
        },
        {
            'title': "Testas2",
            'description': "Labai gerai uzduotis2",
            'isComplete': true,
            'id': 1234568,
        },
    ],
    filter: 'ALL',
}

const removeTodo = (todos, id) => {
    return todos = todos.filter(todo => todo.id !== id)
}

const Todos = (state = init, action) => {
    console.log(state.todos);
    switch (action.type) {
        case ADD_TODO:
            {
                let todos = [...state.todos];
                todos = [action.payload, ...todos]
                return {
                    ...state,
                    todos
                }
            }
        case MARK_DONE:
            {
                let todos = [...state.todos];
                todos = todos.map(todo => {
                    if (todo.id === action.payload) {
                        todo.isComplete = !todo.isComplete;
                    }
                    return todo
                })
                return {
                    ...state,
                    todos
                }
            }
        case FILTER_TODO:
            {
                return {
                    ...state,
                    filter: action.payload
                }
            }
        case REMOVE_TODO:
            {
                const todos = removeTodo(state.todos, action.payload)
                return {
                    ...state,
                    todos
                }
            }
        default: return state
    }
}

export default Todos;