import React, { useState } from 'react';
const LoginUserContext = React.createContext([{}, () => {}])

function LoginUserProvider(props) {
  const [currentUser, setCurrentUser] = useState({})
  return (
    <LoginUserContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </LoginUserContext.Provider>
  );
}

export {LoginUserContext, LoginUserProvider};