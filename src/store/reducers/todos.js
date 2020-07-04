import * as actions from "../actions";

function todosReducer(state = [], { type, payload }) {
  switch (type) {
    case actions.LOAD_TODOS:
      return payload;
    case actions.ADD_TODO:
      payload._id = state.length + 1;
      return [payload, ...state];
    case actions.TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    case actions.REMOVE_TODO:
      return state.filter((todo) => todo._id !== payload);
    default:
      return state;
  }
}

export default todosReducer;
