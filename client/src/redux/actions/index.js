import axios from "axios";

import {
  GETUSERS,
  GETPRODUCTS,
  POSTPRODUCTS,
  POSTUSER,
  GET_ID,
  ADD_FAV,
  REMOVE_FAV,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "./Types";

export const getUsers = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/users");
    console.log(data);
    dispatch({ type: GETUSERS, payload: data });
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/products");
    dispatch({ type: GETPRODUCTS, payload: data });
  };
};

export const postProduct = (product) => {
  return async (dispatch) => {
    const res = await axios.post("/products", product);
    dispatch({ type: POSTPRODUCTS, payload: res });
  };
};

export const postUser = (user) => {
  return async (dispatch) => {
    const res = await axios.post("/products", user);
    dispatch({ type: POSTUSER, payload: res });
  };
};

export function getId(id) {
  return async (dispatch) => {
    const { data } = await axios.get(`/products/search/${id}`);
    dispatch({ type: GET_ID, payload: data });
    console.log(data)
  };
}

 




export function addFav(product) {
  return {
    type: ADD_FAV,
    payload: product,
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}

export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity,
    },
  };
};
export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const orderProductsAlpha = (list) => {

  return async function (dispatch) {

    const products = list.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    dispatch({ type: GETPRODUCTS, payload: [...products] })
  }
}

export const orderProductsAlphant = (list) => {

  return async function (dispatch) {

    const products = list.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    })
    dispatch({ type: GETPRODUCTS, payload: [...products] })
  }
}

export const orderProductsPrice = (list) => {

  return async function (dispatch) {

    const products = list.sort(function (a, b) {
      return     b.price - a.price
    })
    dispatch({ type: GETPRODUCTS, payload: [...products] })
  }
}

export const orderProductsPricent = (list) => {

  return async function (dispatch) {

    const products = list.sort(function (a, b) {
      return       a.price - b.price
    })
    dispatch({ type: GETPRODUCTS, payload: [...products] })
  }
}

