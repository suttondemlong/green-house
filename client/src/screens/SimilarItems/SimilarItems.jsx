import React from 'react';
import "./SimilarItems.css"
import Layout from "../../components/shared/Layout/Layout"
import SimilarItemsProducts from "../../components/SimilarItemsProducts/SimilarItemsProducts"

function SimilarItems(props) {
  return (
    <div>
      <Layout>
        <SimilarItemsProducts />
      </Layout>
    </div>
  );
}

export default SimilarItems;