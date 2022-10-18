const QuantityIncrease = ({products, setProducts, index}) => {
    const quantProducts = [...products];
    quantProducts[index].quantity += index;
    setProducts(quantProducts);
};

export default QuantityIncrease;