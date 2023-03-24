const postReducer = (state, action) => {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case 'POST_MESSAGE':
      return action.payload;
    default:
      return state;
  }
};
export default postReducer;
