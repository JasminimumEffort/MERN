import { useState } from 'react';
import AddProducts from './AddProducts';
import RemoveProducts from './RemoveProducts';
import ProductBasket from './ProductBasket';
import SearchBar from './StolenSearch';
import QuantityIncrease from './quantityIncrease';

const ProductManage = () => {

   const [productName, setProductName] = useState("");
   const [quantity, setQuantity] = useState("");
   const [products, setProducts] = useState([]);
   const [search, setSearch] = useState("");
   const [newProds, setNewProds] = useState([]);

    // const newProduct = ({ target }) => {
    //     setProductName(target.value);
    // }

    const newProd = ({ target }) => {
        setProductName(target.value);
        setQuantity(1);
        const newProd2 = [{name: productName, quantity: quantity}];
        setNewProds(newProd2);
        console.log(newProds)
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

    const productAdd = (event) => { 
        // Save Product name  state to array 
        console.log(newProds)
        setProducts(products => [...products, newProds ]);
        console.log(products);
    }
//productRemove, search, setSearch, products, submitHandler
    return(
       <>
           <AddProducts submitHandler={submitForm} newProduct={newProd} productAdd={productAdd} quantity = {quantity}/>
           {/* <br/>
           <RemoveProducts productsName = {products.name} productRemove  = {productRemove} search = {search} setSearch = {setSearch} products = {products} submitHandler = {submitForm} quantity = {quantity} QuantityIncrease = {QuantityIncrease}/>  */}
           <br/>
            {/* <ProductBasket products={products}/>  */}
       </>
   )
}
export default ProductManage;