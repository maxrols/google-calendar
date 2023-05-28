import React from 'react'
import dayjs from 'dayjs'
import { useContext, useState, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function Day({day, rowIdx}) {
  const {setDaySelected, setShowEventModal, filteredEvents, setSelectedEvent, monthIndex} = useContext(GlobalContext);
  const [dayEvents, setDayEvents] = useState([]);
  useEffect(() => {
    const events = filteredEvents.filter(evt => {
      return day.valueOf() === evt.day
    });
    setDayEvents(events);
  }, [filteredEvents, day])


  const getCurrentDayClass = () => {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 w-7 rounded-full text-white' : ''
  }

  return (
    <div className="border border-gray-200 flex flex-col">
        <header className='flex flex-col items-center'>
          
          {rowIdx === 0 && <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p> }
          <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
            {day.format('DD')}
          </p>
        </header>
        <div className="flex-1 cursor-pointer" onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}>
          {dayEvents.map((evt,i) => (
            <div onClick={() => {
              setSelectedEvent(evt);
            }} className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}>
              {evt.title}
            </div>
          ))}
        </div>
    </div>
  )
}
