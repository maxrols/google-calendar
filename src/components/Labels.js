import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

function Labels() {

    const {labels, updateLabel} = useContext(GlobalContext);

  return (
    <div>
        <p className='text-gray-500 font-bold mt-10'>
            Label
        </p>
        {labels.map(({label: lbl, checked}, idx) => (
            <label key={idx} className="items-center mt-3 block">
                <input type="checkbox" checked={checked} className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
                    onChange={() => updateLabel({label: lbl, checked: !checked})}/>
                <span className={`ml-2 text-${lbl}-700 capitalize`}>{lbl}</span>
            </label>
        ))}
    </div>
  )
}

export default Labels