import './App.css';
import React, {useState} from 'react';
import { getMonth } from './utils';
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import Sidebar from './components/Sidebar';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth()); 

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalendarHeader/>
        <div className="flex flex-1">
          <Sidebar/>
          <Month month={currentMonth}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
