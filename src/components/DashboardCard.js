import React, { useContext } from 'react';
import { Context } from './Context';
import { Toggle } from './Toggle';


const DashboardCard = ({ id, index }) => {
    const value = useContext(Context);
    const [toggle, setToggle] = useContext(Toggle);


    return (
        <div id={id} className={toggle ? 'card-dark' : 'card'}>
            <div className="social-media">
                {value[index].icon}
                <p className={toggle ? 'account-name-dark' : 'account-name'}>{value[index].account}</p>
            </div>
            <h1 className={toggle ? 'no-of-followeres-dark' : 'no-of-followeres'}>{value[index].number}</h1>
            <p className="followers">Followers</p>
            <div className="amount">
                {value[index].resultIocn}
                <p className="increase-followers">{value[index].result}</p>
            </div>
        </div>
    )
}
export default DashboardCard;