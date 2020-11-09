import React from 'react';
import Layout from '../../components/shared/Layout/Layout'
import EditImageComp from '../../components/EditImageComp/EditImageComp'

function EditImage(props) {
  return (
    <div>
      <Layout >
        <EditImageComp />
      </Layout>
    </div>
  );
}

export default EditImage;