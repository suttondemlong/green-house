import React, { useState, useEffect, useReducer } from 'react';
const LoginUserContext = React.createContext([{}, () => {}])

let reducer = (currentUser, newCurrentUser) => {
  if (newCurrentUser === null) {
    localStorage.removeItem("currentUser");
    return initialState;
  }
  return { ...currentUser, ...newCurrentUser };
};

const initialState ={
  _id: "5fa5b5d43c8aca538aaecd17",
  name: "Sherie Jones",
  email: "eco-curious@gmail.com",
  password: "greenhouse1",
  imgURL: "https://raw.githubusercontent.com/suttondemlong/green-house/develop/client/src/assets/userpic.png",
  __v: 0,
  createdAt: "2020-11-06T20:45:08.819Z",
  updatedAt: "2020-11-06T20:45:08.819Z"
}

const localState = JSON.parse(localStorage.getItem("localUser"));

function LoginUserProvider(props) {
  const [currentUser, setCurrentUser] = useReducer(reducer, localState || initialState)
  
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.getItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <LoginUserContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </LoginUserContext.Provider>
  );
}

export {LoginUserContext, LoginUserProvider};