import React from 'react'
import { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs';
import { useReducer } from 'react';
import { useMemo } from 'react';

function savedEventsReducer(state, {type, payload}) {
  switch(type) {
    case 'push':
      return [...state, payload];
    case 'update':
      return state.map(evt => evt.id === payload.id ? payload : evt);
    case 'delete':
      return state.filter(evt => evt.id !== payload.id)
    default:
      throw new Error();
    
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem('savedEvents');
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

function ContextWrapper({children}) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [savedEvents, dispatchCalEvents] = useReducer(savedEventsReducer, [], initEvents);
  const [labels, setLabels] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = useMemo(() => {
    return savedEvents.filter(evt => labels.filter(lbl => lbl.checked).map(lbl => lbl.label).includes(evt.label));
  }, [savedEvents, labels])

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents])

  useEffect(() => {
    setLabels((prev) => {
      return [...new Set(savedEvents.map(evt => evt.label))].map(label => {
        const currentLabel = prev.find(lbl => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true
        }
      })
    });
  }, [savedEvents]);


  useEffect(() => {
    if (smallCalendarMonth !== null) setMonthIndex(smallCalendarMonth);
  }, [smallCalendarMonth])

  useEffect(() => {
    if(!showEventModal) setSelectedEvent(null);
  }, [showEventModal])


  function updateLabel(label) {
    setLabels(labels.map((lbl) => lbl.label === label.label ? label : lbl));
  }

  return (
    <GlobalContext.Provider value={{monthIndex, setMonthIndex, smallCalendarMonth, setSmallCalendarMonth, daySelected, setDaySelected, showEventModal, setShowEventModal, dispatchCalEvents, savedEvents, selectedEvent, setSelectedEvent, labels, setLabels, updateLabel, filteredEvents}}>
        {children }
    </GlobalContext.Provider>
  )
}

export default ContextWrapper;