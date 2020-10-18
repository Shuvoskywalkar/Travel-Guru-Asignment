import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Context } from '../../App';

const Protected = ({ children, ...rest }) => {
    
    const [loggedUser,setloggedUser]=useContext(Context)
    return (
        <Route
        {...rest}
        render={({ location }) =>
           loggedUser.email? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default Protected;