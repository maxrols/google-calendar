import React from 'react';
import Day from './Day';

export default function Month({month}) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-6">
        
        {month.map((row,id) => {
          return (
            <React.Fragment key={id}>
              {row.map((day,idx) => {
                return <Day day={day} key={idx} rowIdx={id}/>
              })}
            </React.Fragment>
          )
        })}
        
    </div>
  )
}
