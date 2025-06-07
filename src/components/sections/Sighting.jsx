import { useEffect, useState } from "react";
import PaintingCard from "../PaintingCard";

const Sighting = () => {
    const [paintings, setPaintings] = useState([]);

    async function getPaintings() {
        const req = await fetch("http://localhost:4000/paintings");
        const paintings = await req.json();
        setPaintings(paintings);
    }


    useEffect(() => {
        getPaintings();
    }, []);

    return (
        <section id="sighting">
            <article>
                <div>
                    <hr />
                    <h3>Какво ще видите?</h3>
                </div>

                <p>Потопете се в света на Иван Милев – където образите говорят без думи. В изложбата ще видите едни от най-знаковите му творби, които резонират с теми като вяра, страдание, женска сила и идентичност.</p>
            </article>

            <section>
                {
                    paintings.map(painting => (
                        <PaintingCard title={painting.name} description={painting.description} year={painting.year} imageUrl={painting.image} key={painting.id} />
                    ))
                }

                <article className="buy">
                    <p>изложба иван милев // 1 юли – 12 август 2025  // TATE Modern, Лондон</p>

                    <section>
                        <picture>
                            <img src="../../../images/paintings/hero-logo.svg" alt="hero logo" />
                        </picture>

                        <button>Купи билет</button>
                    </section>

                    <section>
                        <picture>
                            <img src="../../../images/logo-one-line.svg" alt="logo" />
                        </picture>
                        <picture>
                            <img src="../../../images/tate.svg" alt="tate logo" />
                        </picture>
                    </section>
                </article>
            </section>
        </section>
    );
}

export default Sighting;