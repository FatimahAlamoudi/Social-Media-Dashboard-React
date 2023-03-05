import React, { useContext } from 'react';
import { Context } from './Context';
import { Toggle } from './Toggle';
import { TodayContext } from './TodayContext';


const TodayCard = ({ index }) => {
    const today = useContext(TodayContext);
    const [toggle, setToggle] = useContext(Toggle);


    return (
        <div className={toggle ? 'card-dark' : 'details'}>
            <div className="details-heading">
                <p className="detail-heading-text">{today[index].label}</p>
                {today[index].icon}
            </div>
            <div className="details-body">
                <p className="details-number">{today[index].number}</p>
                <div className="amount">
                    {today[index].resultIcon}
                    <p className="increase-followers">{today[index].result}</p>
                </div>
            </div>
        </div>
    )
}
export default TodayCard;