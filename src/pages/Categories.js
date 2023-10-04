import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/CategoriesSlice';

const Categories = () => {
  const { status, categories } = useSelector((store) => store.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(checkStatus());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories.length]);

  return <h2>{status}</h2>;
};

export default Categories;
