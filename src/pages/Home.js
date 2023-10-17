
import { useNavigate } from "react-router";
import banner from '../assets/bookshelf-with-books-biography-adventure-novel-poem-fantasy-love-story-detective-art-romance-banner-for-library-book-store-genre-of-literature-illustration-in-flat-style-vector.jpg'
export default function Home() {

    const navigate = useNavigate()
    return (
        <div className="content-product">
            <header>
                <div className="user">
                    <span>Usuário</span>
                </div>
            </header>
            <section className="banner">
                <img src={banner} alt="Banner" />
                <div className="text-intro">
                    <p>Book Store, click the button below and select your book!</p>
                    {/* No click no botão chamados a função passando o caminho desejado, direcionando o usuário para a página de produtos*/}
                    {/* Obs.: Ele é utilizado quando precisamos realizar a navegação com base em eventos ou alguma lógica específica. */}
                    <button className="more-info" onClick={() => navigate('/products')}>See all Books</button>
                </div>
            </section>
        </div>
    )
}