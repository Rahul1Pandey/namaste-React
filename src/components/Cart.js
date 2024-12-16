import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{
    
    const cartItems = useSelector((store)=> store.cart.items)
    console.log(cartItems);
     const dispatch = useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return (
        <div className="p-4 m-4 text-center">
            <h2 className="font-bold">cart</h2>
            <div className="w-6/12 m-auto my-8">
                 <button className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                 >
                    clear cart
                  </button>
                  {cartItems.length=== 0 && <h1>Cart is empty.add items to the cart!!</h1>}
                <ItemList lists={cartItems} />
            </div>
        </div>
    )
}

export default Cart;