const inicialState = {};

const reducer = (state = inicialState, actions) => {
  console.log(actions.payload)
  switch (actions.type) {
    default:
      return {
        ...state,
      };
  }
};
export default reducer
