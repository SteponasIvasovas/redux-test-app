import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import { Provider, connect } from 'react-redux';
import AddTodo from './AddTodo.js';

const visibility = ['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_UNCOMPLETED'];

const initialState = {
  todos: [],
  filter: 'SHOW_ALL',
}


const filter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'VISIBILITY' :
      return action.filter;
    default :
      return state;
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO' :
      return [...state, action.todo];
    case 'REMOVE_TODO' :
      return state.filter(todo => todo.text !== action.text);
    default :
      return state;
  }
}

const reducer = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    filter: filter(state.filter, action),
  }
}

const combined = combineReducers({
  todos,
  filter
});


const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case 'VISIBILITY' :
      return {...state, filter: action.filter}
    case 'ADD_TODO' :
      return {...state, todos: [...state.todos, action.todo]}
    case 'REMOVE_TODO' : {
      return {...state, todos: state.todos.filter(todo => todo.text !== action.text)}
    }
    default:
      return state;
  }
}


class App extends React.Component {
  state = {
    value: '',
  }
  handleVisibilityChange = (event) => {
    this.setState({
      selected: event.target.value
    });
    this.props.onVisibilityChange(event.target.value)
  }

  render() {
    return (
      <React.Fragment>
        <AddTodo />
        {/* <TodoList /> */}
        {/* <VisibilityControl /> */}
      </React.Fragment>
    );
  }
}





class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {store.todos.map((todo, index) => (
          <li
            key={index}
            // onClick={() => onTodoClick(todo.text)}
            >
            {todo.text}
          </li>
        ))}
      </ul>
    );
  }
}
class VisibilityControl extends React.Component {
  render() {
    return (
      <select value={this.state.selected} onChange={this.handleVisibilityChange}>
        {visibility.map(filter => (
          <option key={filter} value={filter}>
            {filter.replace(/_/, ' ').toLowerCase()}
          </option>
        ))}
      </select>
    );
  }
}

const store = createStore(combined);

ReactDOM.render(
  <Provider store={store}>
    <App
      // store={store.getState()}
      // onVisibilityChange={(filter) => store.dispatch(setVisibility(filter))}
      // onTodoClick={(text) => store.dispatch(removeTodo(text))}
      // onSubmit={(todo) => store.dispatch(addTodo(todo))}/>
    />
  </Provider>,
  document.getElementById('root')
);

// render();
// store.subscribe(render);
