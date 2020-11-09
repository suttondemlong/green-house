import React from 'react';
import "./MyAccount.css"
import Layout from '../../components/shared/Layout/Layout'
import UserInformation from '../../components/UserInformation/UserInformation';
import UserVerification from '../../components/UserVerification/UserVerification';
import Password from '../../components/Password/Password';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

function MyAccount(props) {
  return (
    <Layout>
      <div className="content-container">
        <h2 className="myaccount-title">My Account</h2>
        <UserInformation />
        <UserVerification />
        <Password />
        <SocialMedia />
      </div>
      </Layout>
  );
}

export default MyAccount;