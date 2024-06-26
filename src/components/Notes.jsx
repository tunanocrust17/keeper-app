import { useState } from "react"

function Notes() {
    const [item, setItem] = useState("test")

    return(
        <div className="note">
            <h1>Title</h1>
            <p>{item}</p>
        </div>
    )
}

export default Notes