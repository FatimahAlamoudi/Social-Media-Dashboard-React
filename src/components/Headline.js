import React, {useContext, useState} from 'react';
import {Toggle} from './Toggle';
const Headline = () =>{


    const [toggle, setToggle] = useContext(Toggle);
    const changeToggle = () =>{
        if(toggle)
        {
            document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
            setToggle(!toggle);
        }
        else{
            document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
            setToggle(!toggle);
        }

    }

    return (
        <>
        <header className={toggle ? 'header-dark' : 'header'}>
        <div>
            <h3 className={toggle ? 'heading-1 heading-1-dark' : 'heading-1'}>Social Media Dashboard</h3>
            <p className={toggle ? 'heading-2 heading-2-dark' : 'heading-2'}>Total followers: 23,004</p>
        </div>

        <hr className="line" />
        <div className="toggle">
            <div className={toggle ? 'heading-2-dark' : 'toggle-heading-2 '}>Dark Mode</div>
            <div>
                <label className="switch">
                    <input className="checkbox" type="checkbox" />
                    <span className="slider round" onClick={changeToggle}></span>
                </label>
            </div>
        </div>
    </header>
        </>
    )

}

export default Headline;