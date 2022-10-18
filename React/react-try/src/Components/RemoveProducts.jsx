import SearchBar from './StolenSearch'


const RemoveProducts = ({productRemove, search, setSearch, products, submitHandler}) => {
    
    return (
        <form onSubmit={submitHandler}>
           <SearchBar text={search} changeHandler={(e) => setSearch(e.target.value)} />
      {
            products
              .filter((product) => product.toLowerCase().startsWith(search.toLowerCase()))
              .map((product, i) => (
                <p>
                  {`${product} `}
                  <button type="button" onClick={() => productRemove(i)}>X</button>
                </p>
              ))
        }
        </form>
    );
}

export default RemoveProducts;