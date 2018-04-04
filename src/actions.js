export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    todo
  }
}
export const removeTodo = text => {
  return {
    type: 'REMOVE_TODO',
    text
  }
}
export const setVisibility = filter => {
  return {
    type: 'VISIBILITY',
    filter
  }
}
