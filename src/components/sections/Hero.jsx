const Hero = () => {
    return (
        <section id="hero">
            <h1>Изкуство<span>, което</span></h1>
            <h1><span>говори с</span> тишина</h1>

            <picture>
                <img src="../../../images/hero-images/image-1.png" alt="hero section image" />
            </picture>

            <picture>
                <img src="../../../images/hero-images/image-2.png" alt="hero section image" />
            </picture>

            <picture>
                <img src="../../../images/hero-images/image-3.png" alt="hero section image" />
            </picture>

            <picture>
                <img src="../../../images/hero-images/image-4.png" alt="hero section image" />
            </picture>

            <picture>
                <img src="../../../images/hero-images/image-5.png" alt="hero section image" />
            </picture>

            <article>
                <button>Купи билет</button>
                <p>изложба иван милев // 1 юли – 12 август 2025  // TATE Modern, Лондон</p>

                <button className="responsive">
                    <picture>
                        <img src="../../../images/buy-ticket.svg" alt="buy ticket" />
                    </picture>
                </button>
            </article>
        </section>
    );
}

export default Hero