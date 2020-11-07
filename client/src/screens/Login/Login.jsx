import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import LoginForm from "../../components/LoginForm/LoginForm"

function Login(props) {
  return (
    <Layout>
      <div>
        <h2>Login</h2>
        <div className='login-form-container'>
        <LoginForm />
        </div>
      </div>
    </Layout>
  );
}

export default Login;
