const PaintingCard = ({ title, imageUrl, description, year }) => {
    return (
        <article>
            <div>
                <h5>{title}</h5>
                <h6>({year}г.)</h6>
            </div>
            
            <picture>
                <img src={`../../../images/paintings/${imageUrl}`} alt={title} />
            </picture>

            <p>{description}</p>
        </article>
    );
}

export default PaintingCard;