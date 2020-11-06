import React from 'react';
import './UserSignUp.css'
import Layout from '../../components/shared/Layout/Layout'
import SignUp from '../../components/SignUp/SignUp'

function UserSignUp(props) {
  return (
    <div>
      <Layout>
        <SignUp />
      </Layout>
    </div>
  );
}

export default UserSignUp;