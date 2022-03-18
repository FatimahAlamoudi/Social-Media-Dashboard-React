import React, { useContext }from 'react';
import { Context } from './Context';
import {Toggle} from './Toggle';

const DashboardOverview = () =>{
    const value = useContext(Context);
    const [toggle, setToggle] = useContext(Toggle);

    
    return (
        <>
        <main className="dashboard">
        <div id="facebook" className={toggle ? 'card-dark' : 'card'}>
            <div className="social-media">
                {value[0].icon}
                <p className={toggle ? 'account-name-dark' : 'account-name'}>{value[0].account}</p>
            </div>
            <h1 className={toggle ? 'no-of-followeres-dark' : 'no-of-followeres'}>{value[0].number}</h1>
            <p className="followers">Followers</p>
            <div className="amount">
               {value[0].resultIocn}
                <p className="increase-followers">{value[0].result}</p>
            </div>
        </div>
        <div id="twitter" className={toggle ? 'card-dark' : 'card'}>
            <div className="social-media">
                {value[1].icon}
                <p className={toggle ? 'account-name-dark' : 'account-name'}>{value[1].account}</p>
            </div>
            <h1 className={toggle ? 'no-of-followeres-dark' : 'no-of-followeres'}>{value[1].number}</h1>
            <p className="followers">Followers</p>
            <div className="amount">
               {value[1].resultIocn}
                <p className="increase-followers">{value[1].result}</p>
            </div>
        </div>
        <div id="instagram" className={toggle ? 'card-dark' : 'card'}>
            <div className="social-media">
                {value[2].icon}
                <p className={toggle ? 'account-name-dark' : 'account-name'}>{value[2].account}</p>
            </div>
            <h1 className={toggle ? 'no-of-followeres-dark' : 'no-of-followeres'}>{value[2].number}</h1>
            <p className="followers">Followers</p>
            <div className="amount">
               {value[2].resultIocn}
                <p className="increase-followers">{value[2].result}</p>
            </div>
        </div>
        <div id="youtube" className={toggle ? 'card-dark' : 'card'}>
            <div className="social-media">
                {value[3].icon}
                <p className={toggle ? 'account-name-dark' : 'account-name'}>{value[3].account}</p>
            </div>
            <h1 className={toggle ? 'no-of-followeres-dark' : 'no-of-followeres'}>{value[3].number}</h1>
            <p className="followers">Followers</p>
            <div className="amount">
               {value[3].resultIocn}
                <p className="decrease-followers">{value[3].result}</p>
            </div>
        </div>
    </main>

        </>
    )
}
export default DashboardOverview;