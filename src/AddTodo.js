import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions.js'


class AddTodo extends React.Component {
  state = {
    value: ''
  }
  inputRef = React.createRef();
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({value: ''});
    this.props.addTodo({text: this.state.value, status: 'uncompleted'});
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  componentDidUpdate() {
    this.inputRef.current.focus();
  }
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} value={this.state.value} ref={this.inputRef}/>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo : (todo) => dispatch(addTodo(todo))
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
