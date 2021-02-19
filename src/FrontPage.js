import React, { useReducer, useState } from 'react';
import Credentials from "./Credentials";
import Button from "./Button";


function FrontPage(){

  const [showLogin, toggleShowLogin] = useState(false);

  if(showLogin){
    return(
        <div>
          <Button
              action={toggleShowLogin(showLogin => !showLogin)}
              label='Hide Login Menu'
          />
          <Credentials/>
          <Button
              label='Log In'
          />
        </div>
    );
  } else {
    return (
      <div>
        <Button
          label='Display Login Menu'
          action={toggleShowLogin(showLogin => !showLogin)}
        />
      </div>
    );
  }



}

export default FrontPage;
