import { useState } from 'react';
import AddProducts from './AddProducts';
import RemoveProducts from './RemoveProducts';
import ProductBasket from './ProductBasket';

const ProductManage = () => {

   const [productName, setProductName] = useState("");
   const [products, setProducts] = useState([]);

    const newProduct = ({ target }) => {
        setProductName(target.value)
    }

   const submitForm = (event) => {
       // Prevent form submission
        event.preventDefault();
   }

    const handleRemove = () =>
        setProducts(products => [])

    const handleAdd = () => { 
        // Save Product name  state to array 
        setProducts(products => [...products, productName]);
    }

    return(
       <>
           <AddProducts submitHandler={submitForm} newProduct={newProduct} handleAdd={handleAdd} />
            <ProductBasket products={products}/> 
       </>
   )
}
export default ProductManage;