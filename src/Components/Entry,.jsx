export function Entry() {
    return (
        <section className="entry-container">
            <img src="../../public/image1.png" alt="" className="entry-image" />
            <article class="entry-article">

                <div className="entry-info">
                    <img src="../../public/marker.png" alt="" className="entry-logo" />
                    <span className="entry-country">JAPAN</span>
                    <a href="" className="entry-link">View on Google Maps</a>
                </div>

                <h2 className="entry-title">Mount Fuji</h2>
                <p className="entry-dates">12 Jan, 2023 - 24 Jan, 2023</p>
                <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>

            </article>
        </section>
    )
}