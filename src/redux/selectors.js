import { createSelector } from '@reduxjs/toolkit';

//  thay đổi cấu trúc của initialState khi sử dụng thunk action creator
//  nên state.todoList => state.todoList

export const productListSelector = (state) => state.productListReducer.productList;

export const productDetailSelector = (state) => state.productDetailReducer.productDetail;

export const roomListSelector = (state) => state.roomListReducer.roomList;

export const filterPriceSelector = (state) => state.filters.price;

export const filterMaterialSelector = (state) => state.filters.material;

export const filterSizeSelector = (state) => state.filters.size;

export const newListProductSelector = createSelector(productListSelector, (productList) => {
  return productList.slice(0, 8).filter((product) => {
    return product.isNew === true;
  });
});

export const viewedListProductSelector = createSelector(productListSelector, (productList) => {
  return productList.slice(0, 8).filter((product) => {
    return product.isViewed === true;
  });
});

export const youCanLikeListProductSelector = createSelector(productListSelector, (productList) => {
  return productList.slice(0, 8).filter((product) => {
    return product.isSuggest === true;
  });
});

export const sofaListSelector = createSelector(productListSelector, (productList) => {
  return productList.filter((product) => {
    return product.category === 'sofa';
  });
});

export const sofaFiltersSelector = createSelector(
  sofaListSelector, // todoList = state.todoList
  filterPriceSelector, // searchText = state.filters.search
  filterMaterialSelector, // status = state.filters.status
  filterSizeSelector, // priorities = state.filters.priorities
  (sofaList, price, material, size) => {
    if (price === 'Từ thấp đến cao') {
      return sofaList
        .filter((sofa) => {
          // console.log(price, material, size);
          if (material === 'All') {
            if (size === 'All') {
              return sofa.category === 'sofa';
            } else {
              return sofa.categoryType === size;
            }
          } else {
            if (size === 'All') {
              return sofa.productMaterial === material && sofa.category === 'sofa';
            } else {
              return sofa.productMaterial === material && sofa.categoryType === size;
            }
          }
        })
        .sort(function (a, b) {
          return a.price - b.price;
        });
    } else {
      return sofaList
        .filter((sofa) => {
          console.log(price, material, size);
          if (material === 'All') {
            if (size === 'All') {
              return sofa.category === 'sofa';
            } else {
              return sofa.categoryType === size;
            }
          } else {
            if (size === 'All') {
              return sofa.productMaterial === material && sofa.category === 'sofa';
            } else {
              return sofa.productMaterial === material && sofa.categoryType === size;
            }
          }
        })
        .sort(function (a, b) {
          return b.price - a.price;
        });
    }
  },
);

export const cartSelector = (state) => state.cartReducer.cart;
