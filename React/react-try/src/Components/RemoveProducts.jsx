import SearchBar from './StolenSearch'


const RemoveProducts = ({quantity, QuantityIncrease, productRemove, search, setSearch, products, submitHandler}) => {
    
    return (
        <form onSubmit={submitHandler}>
           <SearchBar text={search} changeHandler={(e) => setSearch(e.target.value)} />
      {
            products.name
              .filter((product) => product.toLowerCase().startsWith(search.toLowerCase()))
              .map((product, i) => (
                <p>
                  {`${product.name}, ${product.quantity} `}
                  <button type="button" onClick={() => productRemove(i)}>X</button>
                <button type="button" onClick={() => QuantityIncrease(1)}>+</button>
                  <button type="button" onClick={() => QuantityIncrease(-1)}>-</button>
                </p>
              ))
        }
        </form>
    );
}

export default RemoveProducts;