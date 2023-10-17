import { createContext, useEffect, useState } from "react"
import Item from "../components/Item"
import banner from '../assets/bookshelf-with-books-biography-adventure-novel-poem-fantasy-love-story-detective-art-romance-banner-for-library-book-store-genre-of-literature-illustration-in-flat-style-vector.jpg'
import books from '../books.json'

export const Context = createContext()

export default function Produtos() {
    const [productList, setProdutcList] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        setProdutcList(books.menu)
    }, [])
    return (
        <div>
            <header>
                <div className="user">
                    <div>User X: <span>{count}</span> products</div>
                </div>
            </header>
            <section className="banner">
                <img src={banner} alt="Banner" />
            </section>
            <section className="main-products">
                <Context.Provider value={setCount}>
                    {productList.map((p, index) => (
                        <Item key={index} product={p} />
                    ))}
                </Context.Provider>
            </section>
        </div>
    )
}