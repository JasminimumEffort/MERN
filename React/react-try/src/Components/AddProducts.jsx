import SearchBar from './StolenSearch'


const AddProducts = ({ submitHandler, newProduct, handleAdd }) => {
    return (
        <form onSubmit={submitHandler}>
            <input
                placeholder="Enter product:"
                type="text"
                onChange={newProduct}
            />
            <button
                type="button"
                onClick={handleAdd}
            >
                Add Product
          </button>
        </form>
    );
}

export default AddProducts;