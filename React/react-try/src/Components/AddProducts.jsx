
const AddProducts = ({ submitHandler, newProduct, productAdd }) => {
    return (
        <form onSubmit={submitHandler}>
            <input
                placeholder="Enter product:"
                type="text"
                onChange={newProduct}
            />
            <button
                type="button"
                onClick={productAdd}
            >
                Add Product
          </button>
        </form>
    );
}

export default AddProducts;