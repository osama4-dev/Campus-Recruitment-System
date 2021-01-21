import React from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';



export default function InputField(props) {

  return (
    <FormControl>
    <InputLabel>{props.label}</InputLabel>
    <Input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  </FormControl>
  );
}

