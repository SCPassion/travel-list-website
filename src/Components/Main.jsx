import { Entry } from "./Entry,";
import datas from "../data.js";

export function Main() {
    // get the react component arrays for rendering from the data
    const dataEntries = datas.map(data=> {
        return (
            <Entry 
                key={data.id}
                img={{
                    src: data.img.src,
                    alt: data.img.alt
                }}
                title={data.title}
                country={data.country}
                googleMapsLink={data.googleMapsLink}
                dates={data.dates}
                text={data.text}
            />
        )
    })
    // Note: no .join() method is needed for react to render the array.
    // Why ? Because react can render arrays of components.
    // The .join() method is used to convert an array into a string.
    
    return (
        <main>
            {dataEntries}
        </main>
    )
}