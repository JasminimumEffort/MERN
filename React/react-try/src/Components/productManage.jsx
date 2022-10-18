import { useState } from 'react';
import AddProducts from './AddProducts';
import RemoveProducts from './RemoveProducts';
import ProductBasket from './ProductBasket';
import SearchBar from './StolenSearch';


const ProductManage = () => {

   const [productName, setProductName] = useState("");
   const [quantity, setQuantity] = useState("");
   const [products, setProducts] = useState([]);
   const [search, setSearch] = useState("");

    const newProduct = ({ target }) => {
        setProductName(target.value);
        setQuantity(1);
    }

   const submitForm = (event) => {
       // Prevent form submission
        event.preventDefault();
   }

    const productRemove = (index) =>{

    const cloneProducts = [...products];
    cloneProducts.splice(index, 1);
    setProducts(cloneProducts)
    };

    const productAdd = () => { 
        // Save Product name  state to array 
        setProducts(products => [...products, productName]);
    }
//productRemove, search, setSearch, products, submitHandler
    return(
       <>
           <AddProducts submitHandler={submitForm} newProduct={newProduct} productAdd={productAdd} />
           <br/>
           <RemoveProducts productRemove  = {productRemove} search = {search} setSearch = {setSearch} products = {products} submitHandler = {submitForm}/> 
           <br/>
            {/* <ProductBasket products={products}/>  */}
       </>
   )
}
export default ProductManage;