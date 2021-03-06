import React from "react"
import  {connect} from "dva";
import ProductList from "../components/ProductList"
//import products from "../models/products";

const Products = ({dispatch,products})=>{
  function handleDelete(id) {
    dispatch({
      type:'products/delete',
      payload:id
    })
  }
  return (
      <div>
        <h2>list of products</h2>
        <ProductList onDelete={handleDelete} products={products}/>
      </div>
  )
}
//export default Products;

export default connect(({ products }) => ({
  products,
}))(Products);
