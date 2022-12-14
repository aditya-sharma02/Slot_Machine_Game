import React, { useState } from "react";
import Slot from "./Slot";
import './index.css';
const App = () => {
    return (
        <>
            <h1 className="heading" style={{ fontWeight: 'bold' }}> đ° Welcome to Slot Machine Game đ°</h1>
            <div className="slot">
                <div className="result">                <Slot x="đŠ" y="đŠ" z="đŠ" />
                </div>
                <div className="result"><Slot x="đť" y="đť" z="đś" /></div>
                <div className="result"><Slot x='đ' y='đ´ó §ó ˘ó ˇó Źó łó ż' z='đŚ' /></div>   
            </div>
        </>
    )
}

export default App;


