import Context from './Context'
import { useRef, useState } from 'react'

function Provider({ children }) {
    const popCont = useRef()
    const [carts, setCarts] = useState([])
    const [value, setValue] = useState(1)
    const [cartValue, setCartValue] = useState(0)

    const handlePlusItem = () => {
        setValue(prev => prev + 1)
    }

    const handleMinusItem = () => {
        setValue(prev => prev - 1)
    }

    const handleAddCarts = (item) => {
        setCartValue(prev => prev + value)
        const existingItem = carts.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            const updatedCarts = carts.map(cartItem => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + value };
                }
                return cartItem;
            });
            setCarts(updatedCarts);
        } else {
            const newItem = { ...item, quantity: value };
            setCarts([...carts, newItem]);
        }
        setValue(1);
    }

    const handleMinusOneItem = (itemDel) => {
        let check = carts.includes(itemDel);
        if (check) {
            let index = (carts.indexOf(itemDel));

            if (carts[index].quantity >= 1) {
                carts[index].quantity -= 1;
                setCartValue(cartValue - 1);
            }
        }
    }

    const handleRemoveCarts = (itemDel) => {
        setCartValue(prev => prev - itemDel.quantity)

        let newCart = carts.filter(item => item.id !== itemDel.id)
        setCarts(newCart)

        localStorage.setItem('carts', JSON.stringify(newCart));
        localStorage.setItem('cartValue', cartValue);
    }

    const handleUpdateCart = (id, quantity) => {
        const updatedCart = carts.map((item) => {
            if (item.id === id) {
                const newQuantity = parseInt(quantity);
                setCartValue(cartValue - item.quantity + newQuantity);
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        setCarts(updatedCart);
    }

    const props = { popCont, carts, value, cartValue, handleUpdateCart, setCartValue, setValue, handleAddCarts, handleRemoveCarts, handlePlusItem, handleMinusItem, handleMinusOneItem }

    return (
        <Context.Provider value={props}>
            {children}
        </Context.Provider>
    )
}

export default Provider