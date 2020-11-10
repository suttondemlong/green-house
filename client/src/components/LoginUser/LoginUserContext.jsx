import React, { useState, useEffect } from 'react';
const LoginUserContext = React.createContext()
const UpdateUserContext = React.createContext()

function LoginUserProvider(props) {
  const [currentUser, setCurrentUser] = useState({})
  
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('localUser'))
    user ? setCurrentUser(user) : setCurrentUser('')
  }, []);

  return (
    <LoginUserContext.Provider value={currentUser}>
      <UpdateUserContext.Provider value={setCurrentUser}>
      {props.children}
      </UpdateUserContext.Provider>
    </LoginUserContext.Provider>
  );
}

export { LoginUserContext, LoginUserProvider, UpdateUserContext };