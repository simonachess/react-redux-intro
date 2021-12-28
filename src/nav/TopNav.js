import { Button, ButtonGroup } from 'react-bootstrap';
import { filterTodo } from '../store/actions/TodoActions';

import { connect } from 'react-redux';

const TopNav = (props) => {
    let { filterTodo } = props;
    return (
        <ButtonGroup >
            <Button className='m-1' variant='primary' onClick={() => filterTodo('ALL')}>All tasks</Button>
            <Button className='m-1' variant='primary' onClick={() => filterTodo('ACTIVE')}>Active tasks</Button>
            <Button className='m-1' variant='primary' onClick={() => filterTodo('DONE')}>Done tasks</Button>
        </ButtonGroup>
    )
}

export default connect(null, { filterTodo })(TopNav);

