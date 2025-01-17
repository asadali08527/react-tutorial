import { useSelector, useDispatch } from'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../slices/cartSlice';

const Cart = ()=>{
    const itemList = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
            // Clear the cart state.
            dispatch(clearCart());
    };
    console.log(itemList);
    return <div data-testid="cart-item" className="text-center m-4 p-4">
        <h1 className="text-2l font-bold">Cart</h1>
        <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={()=>handleClearCart()}>Clear Cart</button>
        {
        itemList.length === 0? 
        <p>Cart is empty. Add Item to the cart!</p>:
        itemList.map((m, index)=> (<ItemList key = {index} item={m} />))
        }
        </div>
    </div>
}
export default Cart;