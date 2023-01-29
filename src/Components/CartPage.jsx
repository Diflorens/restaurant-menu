import {useState} from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import "./CartPage.css"
import CheckoutModal from './CheckoutModal';
import { useEffect } from 'preact/hooks';

function CartPage({cartItems, setCartItems}) {
  const [openCheckout, setOpenCheckout] = useState(false);
  const [ result, setResult] = useState(0)
  const [ placed, setPlaced] = useState(false)
    let result1 = 0
    useEffect(()=>{
      setResult(result1)
    },[cartItems])
    const updateItemQuantity = (i, num)=>{
        (num === 1 ) ? (cartItems[i].inCart +=1) :( (cartItems[i].inCart > 1) ? cartItems[i].inCart -= 1 : null)
        const copyState = [...cartItems]
        setCartItems(copyState)
    }
    const removeCartItem = (i)=>{
        const copyItems = [...cartItems]
        copyItems.splice( i , 1 )
        setCartItems(copyItems)
    }

    const removeAllCartItems = ()=>{
        setCartItems([])
    }

    const handleCheckoutBtn = (event) =>{
      event.preventDefault()
      setCartItems([])
      setOpenCheckout(false)
      setPlaced(true)
      setTimeout(()=>setPlaced(false),3000)
    }

    return (
        <div className='cart-page-container'>
        {openCheckout && <CheckoutModal openCheckout={openCheckout} setOpenCheckout={setOpenCheckout} result={result} handleCheckoutBtn={handleCheckoutBtn}/>}
        {cartItems.map((ele, index)=> {
            result1 += ele.price * ele.inCart
            return (
            <Card className="CardItem">
            <CardMedia image={ele.img} title={ele.title} className="pictire-container" />
            <CardContent>
              <Typography
                className="card-item-name"
                gutterBottom
                variant="h5"
                component="div"
              >
                {ele.title}
              </Typography>
              <Typography
                className="card-item-description"
                variant="body2"
                color="text.secondary"
              >
                {ele.desc}
              </Typography>
              <Typography
                className="card-item-name"
                variant="h6"
                color="text.black"
              >
                Price: ${ele.price}
              </Typography>
            </CardContent>
            <CardActions className='cart-btn-wrapper'>
                <div className='quantity-btns-wrapper'>
                <button className = "quantity-btns-cartpage" onClick = {()=>updateItemQuantity(index, 1)}>+</button>
                <h4 className = 'quantity-num-cartpage' >{ele.inCart}</h4>
                <button className = "quantity-btns-cartpage" onClick={()=> updateItemQuantity(index, -1)}>-</button>
                </div>
                <button className = "remove-btn-cartpage" onClick={()=>removeCartItem(index)}>Remove</button>
            </CardActions>
          </Card>

            )
            })}
        {cartItems.length > 0 ? 
        <div>
          <h2>Subtotal: ${result.toFixed(2)}</h2>
          <button className='btn-checkout' onClick = {()=> setOpenCheckout(true)}>Checkout</button>
          <button className='btn-clear-all' onClick={()=>removeAllCartItems()}>Clear All</button>
        </div>
        :
        <div className='empty-or-placed'>
          <h2>{placed ? "Thank you for Your Order." : "Your Shopping Cart is empty."}</h2>
          {placed && <img src="https://media3.giphy.com/media/RKTClKCkdSJHk5hK1W/source.gif" alt="" />}
        </div>
        }
        
        </div>
  )
}

export default CartPage