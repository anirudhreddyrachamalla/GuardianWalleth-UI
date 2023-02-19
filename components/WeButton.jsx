import React from 'react'

function WeButton({label = "button", clickHandler, px, py, fontSize, ...rest} ) {
  return (
    <button onClick={clickHandler} className={`bg-brandColor ${ px ? `px-${px}` :"px-4"}  ${ py ? `py-${py}` : "py-2"}  ${ fontSize? `text-${fontSize}`: "text-base"} font-medium text-white shadow-sm rounded-md`}>
      {label}
    </button>
  )
}

export default WeButton