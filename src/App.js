import React from 'react';
import Headline from './components/Headline';
import DashboardOverview from './components/DashboardOverview';
import TodayOverview from './components/TodayOverview'
import {ContextProvider} from './components/Context';
import {TodayContextProvider} from './components/TodayContext';
import {ToggleContext} from './components/Toggle';


function App() {
  return (
    <ContextProvider>
      <TodayContextProvider>
        <ToggleContext>
          <div className="App">
          <Headline />
          <DashboardOverview />
          <TodayOverview />
          </div>
          </ToggleContext>
        </TodayContextProvider>
      </ContextProvider>
  );
}

export default App;
