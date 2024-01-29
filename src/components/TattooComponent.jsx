import { useState } from "react"

export const TattooComponent = (props) => {
   
    const [amount,setAmount]=useState(0);
    const [isFavorite, setIsFavorite]=useState (true);

    
    const minusHandler = () => {
        if (amount === 0) return
        setAmount(amount - 1)
    }

    const plusHandler = () => {
        setAmount(amount + 1)
    }

    const addToCartHandler = () => {
        console.log ("Minus")
    }
    
    const favHandler = () => {
        setIsFavorite((prev)=>{return !prev})
    }
    
  return (
<div className="tattoo-card">
       <div className="favorite" onClick={favHandler}>
        img
       </div>
       <img src={'\public\images\{props.tattoo.first}.png'} alt="foto"/>
        <p>{props.tattoo.name}</p>
        <h4>{props.tattoo.price}</h4>
    
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <button style={{color:'#BB8C5F'}}onClick={addToCartHandler}>Добавить в корзину</button>

            <div className="cart-counter">
                <button className="minus" onClick={minusHandler}>-</button>
                <div className="amount">{amount}</div>
                <button className="plus"onClick={plusHandler}>+</button>
            </div>
        </div>
        
    
    </div>
  )
}
