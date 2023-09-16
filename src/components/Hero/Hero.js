import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { office } from '../../Store/productReducer'; // Import the action creator

function Hero(props) {
  const handleButtonClick = (name) => {
    props.office(name); 
  };

  return (
    <div>
      <Button onClick={() => handleButtonClick('office')}>office</Button>
      <Button onClick={() => handleButtonClick('food')}>food</Button>
      <Button onClick={() => handleButtonClick('electronics')}>electronics</Button>
    </div>
  );
}

const mapDispatchToProps = { office };

export default connect(null, mapDispatchToProps)(Hero);
