const ProductBasket = ({products}) => {

    const Display = ({ productName }) => <li>{productName}</li>
    return ( 
        <ul className="previousSearch">
            {products.map((productName, i) => (
                <Display
                    productName={productName}
                    // Prevent duplicate keys by appending index:
                    key={i}
                />
            ))}
        </ul>
     );
}

export default ProductBasket;