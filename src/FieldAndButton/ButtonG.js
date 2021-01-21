import React from 'react';

import Button from '@material-ui/core/Button';
import './ButtonG.css'




export default function ButtonG(props) {

  return (
    <div className="ButtonG">
      <div>
       
        <Button variant="contained" size="medium" color="primary" onClick={props.onClick} >
          {props.text}
        </Button>
        
      </div>
    </div>
  );
}