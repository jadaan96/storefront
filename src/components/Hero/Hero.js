import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'
import { office } from '../../Store/productReducer.store';
function Hero() {
  const dispatch = useDispatch();
  
  const handleButtonClick = (name) => {
    dispatch(office(name)); 
  };

  return (
    <div>
      <Button onClick={() => handleButtonClick('office')}>office</Button>
      <Button onClick={() => handleButtonClick('food')}>food</Button>
      <Button onClick={() => handleButtonClick('electronics')}>electronics</Button>
    </div>
  );
}


export default Hero;
