import React from 'react'

const Button = ({btnColor,hoverColor,margin, name}) => {
  return (
    <>
    <button className={`button inline-flex text-white bg-${btnColor}  py-2 px-6 focus:outline-none hover:bg-${hoverColor} ${margin} rounded text-lg`}>{name}</button>
    </>
  )
}

export default Button