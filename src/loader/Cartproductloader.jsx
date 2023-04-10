import { getShoppingCart } from "../utilities/fakedb";

const Cartproductloader = async () => {
    let loaddedproducts = await fetch('products.json')
    let productData = await loaddedproducts.json()
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = productData.find(pd => pd.id === id)
        if (addedProduct) {
            const quantity= storedCart[id]
            addedProduct.quantity = quantity
            savedCart.push(addedProduct)
        }
    }
    return (savedCart)
};

export default Cartproductloader;