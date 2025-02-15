import { useState } from 'react'
import './App.css'
import HeartText from "./HeartText";

function App() {
    const [name] = useState("АЛЁНА ");

    return (
        <>
            <HeartText text={name} size={15} scaleY={1.25} />
        </>
    )
}

export default App
