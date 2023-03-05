import React, { useContext }from 'react';
import { Context } from './Context';
import DashboardCard from './DashboardCard';
import {Toggle} from './Toggle';

const DashboardOverview = () =>{
    const value = useContext(Context);
    const [toggle, setToggle] = useContext(Toggle);


    return (
        <>
        <main className="dashboard">
            <DashboardCard id={'facebook'} index={0}/>
            <DashboardCard id={'twitter'} index={1}/>
            <DashboardCard id={'instagram'} index={2}/>
            <DashboardCard id={'youtube'} index={3}/>
        </main>

        </>
    )
}
export default DashboardOverview;