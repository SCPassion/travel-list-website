import globe from "../assets/globe.png"

export function Header() {
    return (
        <header className="header-container">
            <img src={globe} alt="Globe" className="header-image"/>
            <h1 className="header-title">my travel journal.</h1>
        </header>
    )
}