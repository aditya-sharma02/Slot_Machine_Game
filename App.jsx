import React, { useState } from "react";
import Slot from "./Slot";
import './index.css';
const App = () => {
    return (
        <>
            <h1 className="heading" style={{ fontWeight: 'bold' }}> 🎰 Welcome to Slot Machine Game 🎰</h1>
            <div className="slot">
                <div className="result">                <Slot x="🛩" y="🛩" z="🛩" />
                </div>
                <div className="result"><Slot x="😻" y="😻" z="🍶" /></div>
                <div className="result"><Slot x='🌓' y='🏴󠁧󠁢󠁷󠁬󠁳󠁿' z='🦓' /></div>   
            </div>
        </>
    )
}

export default App;


