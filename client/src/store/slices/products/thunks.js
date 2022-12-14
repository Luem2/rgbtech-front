import axios from 'axios';
import {
  getProducts,
  getDetailsProductById,
  searchName,
  getProductsFilters,
  getTags,
  getBrands,
  limpiarFiltros,
  getFilt,
} from './productSlice';

export const searchNameAction = input => {
  return async dispatch => {
    try {
      const products = await axios.get(`products/name-list`);
      dispatch(searchName(products.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const searchTagAction = input => {
  return async dispatch => {
    try {
      const products = await axios.get(`products?tag=${input}`);
      dispatch(getProductsFilters(products.data));
    } catch (error) {
      console.error(e);
    }
  };
};

export const getAllProducts = (num, search) => {
  if (!search) {
    search = '?';
  } else {
    search = search + '&';
  }
  return async dispatch => {
    try {
      if (search.includes('pageNumber')) {
        const products = await axios.get(
          `products${search.slice(0, search.length - 1)}`
        );
        dispatch(getProducts(products.data));
      } else {
        const products = await axios.get(
          `products${search}pageNumber=${num || 1}`
        );
        dispatch(getProducts(products.data));
      }
    } catch (e) {
      console.error(e);
    }
  };
};

export const getProductById = id => {
  return async dispatch => {
    try {
      const product = await axios.get(`products/${id}`);
      dispatch(getDetailsProductById(product.data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const getProductsBestSeller = () => {
  return async dispatch => {
    try {
      const products = await axios.get('products/BestSeller');
      dispatch(getFilt(products.data));
    } catch (e) {
      console.error(e);
    }
  };
};
export const getProductDiscount = () => {
  return async dispatch => {
    try {
      const products = await axios.get('products/Discount');
      dispatch(getFilt(products.data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const getProductFreeShep = () => {
  return async dispatch => {
    try {
      const products = await axios.get('products/FreeShipping');
      dispatch(getFilt(products.data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const setProduct = () => {
  try {
    const products = [''];
    dispatch(getFilt(products.data));
  } catch (e) {
    console.error(e);
  }
};

export const getEtiquetas = () => {
  return async dispatch => {
    try {
      const tag = await axios.get(`tags`);
      dispatch(getTags(tag.data));
    } catch (error) {
      console.error(e);
    }
  };
};

export const getMarcas = () => {
  return async dispatch => {
    try {
      const brand = await axios.get(`brands`);
      dispatch(getBrands(brand.data));
    } catch (error) {
      console.error(e);
    }
  };
};

export const limpiarProductos = () => {
  return dispatch => {
    try {
      dispatch(limpiarFiltros());
    } catch (e) {
      console.error(e);
    }
  };
};
