import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';



const initialState = {
  todos: []
}

const addTodo = text => ({
  type: 'ADD_TODO',
  text
});

const todoApp(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO' :
      return []
    default:
      return state;
  }

  return state;
}



class App extends React.Component {
  render() {
    return (<div>Hello</div>);
  }
}





ReactDOM.render(
  <App />,
  document.getElementById('root'));
