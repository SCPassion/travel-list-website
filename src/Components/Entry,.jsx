import marker from "../../public/marker.png"

export function Entry(props) {
    return (
        <section className="entry-container">
            
            <img src={props.img.src} alt={props.img.alt} className="entry-image" />
            <article class="entry-article">

                <div className="entry-info">
                    <img src={marker} alt="" className="entry-logo" />
                    <span className="entry-country">{props.country}</span>
                    <a href={props.googleMapsLink} target="_blank" className="entry-link">View on Google Maps</a>
                </div>

                <h2 className="entry-title">{props.title}</h2>
                <p className="entry-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>

            </article>
        </section>
    )
}