const RemoveProducts = ({ submitHandler, removeProduct, handleRemove }) => {
    return (
        <form onSubmit={submitHandler}>
            <input
                placeholder="Enter product to remove:"
                type="text"
                onChange={removeProduct}
            />
            <button
                type="button"
                onClick={handleRemove}
            >
                Remove Product
          </button>
        </form>
    );
}

export default RemoveProducts;