import React, { useContext } from 'react'
import plus from '../assets/plus.svg'
import GlobalContext from '../context/GlobalContext'

function CreateEventButton() {

  const {setShowEventModal} = useContext(GlobalContext);

  return (
    <button onClick={() => setShowEventModal(true)} className='flex border p-2 rounded-full shadow-xl hover:shadow-md items-center transition-all'>
    <img src={plus} alt="create event button w-7 h-7" />
    <span className='pl-3 pr-7'>Create</span>
    </button>
  )
}

export default CreateEventButton