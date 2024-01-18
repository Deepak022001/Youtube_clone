import React from 'react'
// const list=["All","Live","Gaming"]
const Button = ({name}) => {
  return (
    <div>
      <button className='py-2 px-5 m-2 bg-gray-100'>{name}</button>

    </div>
  )
}

export default Button