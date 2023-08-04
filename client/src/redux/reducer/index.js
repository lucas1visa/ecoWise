import {
  GETPRODUCTS,
  GET_ID,
  ADD_FAV,
  REMOVE_FAV,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/Types";

const inicialState = {
  products: [],
  detail: {},
  favorites: [],
  cartItems: [],
};

const reducer = (state = inicialState, actions) => {
  actions.payload;
  console.log(actions.payload);
  let existingCartItem;
  switch (actions.type) {
    case GETPRODUCTS:
      return {
        ...state,
        products: actions.payload,
      };

    case GET_ID:
      return {
        ...state,
        detail: actions.payload,
      };

    case ADD_FAV:
      console.log("Adding to favorites:", actions.payload);
      return {
        ...state,
        favorites: [...state.favorites, actions.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.id !== actions.payload
        ),
      };
    case ADD_TO_CART:
      existingCartItem = state.cartItems.find(
        (item) => item.product.id === actions.payload.product.id
      );

      if (existingCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product.id === actions.payload.product.id
              ? { ...item, quantity: item.quantity + actions.payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,

          cartItems: [
            ...state.cartItems,
            {
              product: actions.payload.product,
              quantity: actions.payload.quantity,
            },
          ],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,

        cartItems: state.cartItems.filter(
          (item) => item.product.id !== actions.payload
        ),
      };
      

    default:
      return {
        ...state
      };
  }
};
export default reducer;
