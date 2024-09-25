import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [all_products, setAll_products] = useState([])

    useEffect(() => {
        fetch('https://clgproject.onrender.com/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_products(data))
        if (localStorage.getItem('auth-token')) {
            fetch('https://clgproject.onrender.com/getdata', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json,'
                },
                body: "",
            })
                .then((response) => response.json())
                .then((data) =>setCartItems(data));
        }
    }, [])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('https://clgproject.onrender.com/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));

        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch(`https://clgproject.onrender.com/removefromcart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));

        }
    }

    const getTotalCartAmount = () => {
        let TotalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item))
                TotalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return TotalAmount
    }

    const getTotalCartIitems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    useEffect(() => {
    }, [cartItems]);

    const contextValue = { all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartIitems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
