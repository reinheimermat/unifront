import React, { useState } from 'react'

const Switch = ({ option1, option2, contextToggle }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
    contextToggle()
  }

  return (
    <div className="flex items-center justify-center flex-col mt-5">
      <p className="text-custom-gray-100 mb-2">Deseja logar como?</p>

      <label className="flex gap-2 items-center relative cursor-pointer">
        <p
          className={`${isChecked ? 'text-custom-gray-100' : 'text-custom-blue-100'} font-semibold`}
        >
          {option1}
        </p>
        <input type="checkbox" onChange={handleChange} className="hidden" />
        <span className="border border-custom-black-700 rounded bg-gradient-to-t to-custom-black-600 from-custom-black-400 rounded-full w-12 h-5 transition-all duration-300 relative inline-block cursor-pointer">
          <span
            className={`absolute w-4 h-4 bg-white rounded-full top-[10%] transform ${
              isChecked ? 'translate-x-7' : 'translate-x-[10%]'
            } transition-all duration-300`}
          ></span>
        </span>
        <p
          className={`${!isChecked ? 'text-custom-gray-100' : 'text-custom-blue-100'} font-semibold`}
        >
          {option2}
        </p>
      </label>
    </div>
  )
}

export default Switch
