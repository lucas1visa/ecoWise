import {GETPRODUCTS,POSTPRODUCTS,POSTUSER,} from "../actions/Types"
const inicialState = {
  products:[],
};

const reducer = (state = inicialState, actions) => {
  actions.payload
  console.log(actions.payload)
  switch (actions.type) {
    case GETPRODUCTS:
      return{
        ...state,
        products: actions.payload
      };
    default:
      return {
        ...state
      };
  }
};
export default reducer
