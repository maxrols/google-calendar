import React from "react";

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: () => {

    },
    smallCalendarMonth: null,
    setSmallCalendarMonth: (index) => {

    },
    daySelected: null,
    setDaySelected: (index) => {},
    showEventModal: false,
    setShowEventModal: () => {},
    savedEvents: []
})

export default GlobalContext;