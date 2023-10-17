// https://pt-br.react.dev/reference/react/useContext
import { useState, useContext } from "react"
// Importanto o contexto que criamos na página de produtos
import { Context } from "../pages/Produto"

export default function QuantityBuy(props) {
    const [quantity, setQuantity] = useState(1)
    const [valueButton, setValueButton] = useState(true)
    const produto = props.product
    const setCount = useContext(Context)
    const minus = () => {
        (quantity - 1) === 1 ? setValueButton(true) : setValueButton(false)
        if (quantity !== 1) {
            setQuantity(quantity - 1)
        }
    }
    const plus = () => {
        setValueButton(false)
        setQuantity(quantity + 1)
    }

    const buyProduct = () => {
        if (window.confirm(`Final price of ${produto.title}: ${Math.round((produto.price * quantity) * 100) / 100}`)) {
            alert('Book purchased successfully!!')
            setQuantity(1)
            //Adding more when purchase is made
            setCount(value => value + 1)
        }
    }
    return (
        <div className="buttons-product">
            <div className="quantity">
                <span >Quantity:</span>
                <button disabled={valueButton} className="minus" onClick={minus}>-</button>
                <span>{quantity}</span>
                <button className="plus" onClick={plus}>+</button>
            </div>
            <button className="buy" onClick={buyProduct}>click here to buy</button>
        </div>
    );
}