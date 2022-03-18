import React, {useContext} from 'react';
import { TodayContext  } from './TodayContext';
import {Toggle} from './Toggle';
const TodayOverview = () =>{
    const today = useContext(TodayContext);
    const [toggle, setToggle] = useContext(Toggle);

    return (
        <>
         <section className="overiew-today">
        <h2 className={toggle ? 'heading-1-dark' : 'overview-heading'}>Overview - Today</h2>
        <div className='overview-details'>
            <div className={toggle ? 'card-dark' : 'details'}>
                <div className="details-heading">
                    <p className="detail-heading-text">{today[0].label}</p>
                    {today[0].icon}
                </div>
                <div className="details-body">
                    <p className="details-number">{today[0].number}</p>
                    <div className="amount">
                            {today[0].resultIcon}
                        <p className="increase-followers">{today[0].result}</p>
                    </div>
                </div>
            </div>

            <div className={toggle ? 'card-dark' : 'details'}>
                <div className="details-heading">
                    <p className="detail-heading-text">{today[1].label}</p>
                    {today[1].icon}
                </div>
                <div className="details-body">
                    <p className="details-number">{today[1].number}</p>
                    <div className="amount">
                            {today[1].resultIcon}
                        <p className="decrease-followers">{today[1].result}</p>
                    </div>
                </div>
            </div>

            <div className={toggle ? 'card-dark' : 'details'}>
                <div className="details-heading">
                    <p className="detail-heading-text">{today[2].label}</p>
                    {today[2].icon}
                </div>
                <div className="details-body">
                    <p className="details-number">{today[2].number}</p>
                    <div className="amount">
                            {today[2].resultIcon}
                        <p className="increase-followers">{today[2].result}</p>
                    </div>
                </div>
            </div>

            <div className={toggle ? 'card-dark' : 'details'}>
                <div className="details-heading">
                    <p className="detail-heading-text">{today[3].label}</p>
                    {today[3].icon}
                </div>
                <div className="details-body">
                    <p className="details-number">{today[3].number}</p>
                    <div className="amount">
                            {today[3].resultIcon}
                        <p className="increase-followers">{today[3].result}</p>
                    </div>
                </div>
            </div>         
        </div>

        <div className="overview-details margin-top">
        <div className={toggle ? 'card-dark' : 'details'}>
                <div className="details-heading">
                    <p className="detail-heading-text">{today[4].label}</p>
                    {today[4].icon}
                </div>
                <div className="details-body">
                    <p className="details-number">{today[4].number}</p>
                    <div className="amount">
                            {today[4].resultIcon}
                        <p className="increase-followers">{today[4].result}</p>
                    </div>
                </div>
            </div>

            <div className={toggle ? 'card-dark' : 'details'}>
                <div className="details-heading">
                    <p className="detail-heading-text">{today[5].label}</p>
                    {today[5].icon}
                </div>
                <div className="details-body">
                    <p className="details-number">{today[5].number}</p>
                    <div className="amount">
                            {today[5].resultIcon}
                        <p className="increase-followers">{today[5].result}</p>
                    </div>
                </div>
            </div>

            <div className={toggle ? 'card-dark' : 'details'}>
                <div className="details-heading">
                    <p className="detail-heading-text">{today[6].label}</p>
                    {today[6].icon}
                </div>
                <div className="details-body">
                    <p className="details-number">{today[6].number}</p>
                    <div className="amount">
                            {today[6].resultIcon}
                        <p className="decrease-followers">{today[6].result}</p>
                    </div>
                </div>
            </div>

            <div className={toggle ? 'card-dark' : 'details'}>
                <div className="details-heading">
                    <p className="detail-heading-text">{today[7].label}</p>
                    {today[7].icon}
                </div>
                <div className="details-body">
                    <p className="details-number">{today[7].number}</p>
                    <div className="amount">
                            {today[7].resultIcon}
                        <p className="decrease-followers">{today[7].result}</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
        </>
    )
}
export default TodayOverview;