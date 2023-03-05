import React, { useContext } from 'react';
import TodayCard from './TodayCard';
import { TodayContext } from './TodayContext';
import { Toggle } from './Toggle';
const TodayOverview = () => {
    const today = useContext(TodayContext);
    const [toggle, setToggle] = useContext(Toggle);

    return (
        <>
            <section className="overiew-today">
                <h2 className={toggle ? 'heading-1-dark' : 'overview-heading'}>Overview - Today</h2>
                <div className='overview-details'>
                    <TodayCard index={0} />
                    <TodayCard index={1} />
                    <TodayCard index={2} />
                    <TodayCard index={3} />
                </div>

                <div className="overview-details margin-top">
                    <TodayCard index={4} />
                    <TodayCard index={5} />
                    <TodayCard index={6} />
                    <TodayCard index={7} />
                </div>
            </section>
        </>
    )
}
export default TodayOverview;