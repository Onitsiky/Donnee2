import React from 'react';
export default function Myinput (props){
    const [label] = props;
    return(
      <>
          <span>{label}</span> <br/>
        <input type='text' name={label}/>
          <br/><br/><br/>
      </>
    );
}