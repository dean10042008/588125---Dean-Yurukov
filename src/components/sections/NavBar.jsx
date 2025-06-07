import { useState } from "react";

const Navbar = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <nav>
            <article>
                <p>За изложбата</p>
                <p>За автора</p>
            </article>

            <picture>
                <img src="../../../images/logo-one-line.svg" alt="logo" />
            </picture>

            <article>
                <p>Начало</p>
                <p>Купи билет</p>
            </article>

            <button onClick={() => setIsShown(prev => prev = !prev)}>
                <picture>
                    <img src="../../../images/burger-icon.svg" alt="burger icon" />
                </picture>
            </button>

            {
                isShown && 
                <ul>
                    <li>Начало</li>
                    <li>Купи билет</li>
                    <li>За изложбата</li>
                    <li>За автора</li>
                </ul>
            }
        </nav>
    );
}

export default Navbar;