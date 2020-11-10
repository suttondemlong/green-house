import React, { useState, useEffect } from 'react';
const LoginUserContext = React.createContext([{}, () => {}])

function LoginUserProvider(props) {
  const [currentUser, setCurrentUser] = useState({})
  
  useEffect(() => {
    let user = localStorage.getItem('localUser')
    user ? setCurrentUser(JSON.parse(user)) : setCurrentUser('')
  }, []);

  return (
    <LoginUserContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </LoginUserContext.Provider>
  );
}

export {LoginUserContext, LoginUserProvider};