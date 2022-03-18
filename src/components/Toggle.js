import React ,  { createContext, useState } from 'react';

export const Toggle = createContext();

export const ToggleContext = props => {
    const [toggle, setToggle] = useState(false);
    return (
        <Toggle.Provider value={[toggle, setToggle]}>
            {props.children}
        </Toggle.Provider>
    )
};