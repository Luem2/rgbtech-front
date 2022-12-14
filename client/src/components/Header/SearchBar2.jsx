import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchNameAction } from '../../store/slices/products/thunks';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

export default function SearchBar2() {
  // const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productsName } = useSelector(state => state.products);

  const onChange = value => {
    dispatch(searchNameAction());
    navigate('/productDetails/' + value.value);
  };

  useEffect(() => {
    dispatch(searchNameAction());
  }, [dispatch]);

  /////////////////* Styles-Select* ///////////////////////
  const colourStyles = {
    control: styles => ({
      ...styles,
      width: 300,
      backgroundColor: 'wite',
      cursor: 'pointer',
      borderRadius: 10,
      border: '3px solid #FF69B4',
    }),
    option: (styles, { isSelected, isFocused }) => {
      /*(More parameters for option style function) data, isDisabled, isFocused, */
      return {
        ...styles,
        borderRadius: 5,
        backgroundColor: isSelected ? '#FF1493' : 'white',
        color: isSelected
          ? 'white'
          : 'black' && isFocused
          ? '#008080'
          : 'black',
        cursor: 'pointer',
        padding: 10,
        margin: 3,
        width: 285,
      };
    },
  };

  return (
    <div>
      <Select
        className='flex rounded pl-1 pt-1 pr-1 pb-2 font-bold sm:w-60 mt-3'
        placeholder='Search product'
        styles={colourStyles}
        options={productsName}
        onChange={onChange}
      />
    </div>
  );
}
